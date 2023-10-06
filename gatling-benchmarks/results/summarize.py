#!/usr/bin/python3

import json
import os
import sys

def simulations_to_markdown():
    simulations = []

    for root, _, files in os.walk("./"):
        if "stats.js" in files:
            simulation_file = open(root + "/assertions.json")
            simulation = json.load(simulation_file)["simulation"]
            simulation_file.close()

            stats_file = open(root + "/stats.json")
            stats = json.load(stats_file)["stats"]
            stats_file.close()

            simulation = {
                "simulation": simulation.replace("Simulation", ""),
                "numberOfRequests": stats["numberOfRequests"]["ok"],
                "minResponseTime": stats["minResponseTime"]["ok"],
                "maxResponseTime": stats["maxResponseTime"]["ok"],
                "meanResponseTime": stats["meanResponseTime"]["ok"],
                "p50": stats["percentiles1"]["ok"],
                "p75": stats["percentiles2"]["ok"],
                "p95": stats["percentiles3"]["ok"],
                "p99": stats["percentiles4"]["ok"],
            }
            simulations.append(simulation)
        
    result = sorted(simulations, key=lambda k: (-k['numberOfRequests'], k["maxResponseTime"], k['p99']))
    markdown = ""
    markdown += "|#|Simulation|Reqs|Min|Max|Mean|p50|p75|p95|p99|\n"
    markdown += "|-:|:-|-:|-:|-:|-:|-:|-:|-:|-:|\n"

    number = 0
    for r in result:
        number += 1
        markdown += "|{}|{}|{}|{}|{}|{}|{}|{}|{}|{}|\n".format(
            display(number),
            r["simulation"], 
            r["numberOfRequests"], 
            r["minResponseTime"], 
            r["maxResponseTime"], 
            r["meanResponseTime"], 
            r["p50"], 
            r["p75"], 
            r["p95"], 
            r["p99"]
        )
    
    return markdown

def display(number):
    match number:
        case 1:
            return "🏆"
        case 2:
            return "🥈"
        case 3:
            return "🥉"
        case _:
            return number

def print_markdown():
  print(simulations_to_markdown())  


def replace_readme():
    simulation = simulations_to_markdown()
    with open(sys.path[0] + "/../../README.md", 'r+') as f:

        text = f.read()
        sub1 = "<!-- start gatling simulations table -->"
        sub2 = "<!-- end gatling simulations table -->"
        idx1 = text.index(sub1)
        idx2 = text.index(sub2)
    
        updated = text[:(idx1 + len(sub1) + 1)] + simulation + text[idx2:]

        f.seek(0) # rewind
        f.write(updated)

replace_readme()
print("Done")