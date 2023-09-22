var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "60000",
        "ok": "56878",
        "ko": "3122"
    },
    "minResponseTime": {
        "total": "26",
        "ok": "26",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "45622",
        "ok": "45622",
        "ko": "22527"
    },
    "meanResponseTime": {
        "total": "24751",
        "ok": "25555",
        "ko": "10107"
    },
    "standardDeviation": {
        "total": "13564",
        "ok": "13477",
        "ko": "768"
    },
    "percentiles1": {
        "total": "29386",
        "ok": "29579",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "37115",
        "ok": "37271",
        "ko": "10011"
    },
    "percentiles3": {
        "total": "40715",
        "ok": "40736",
        "ko": "10052"
    },
    "percentiles4": {
        "total": "41742",
        "ok": "41760",
        "ko": "15318"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4510,
    "percentage": 8
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 350,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 52018,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3122,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "666.667",
        "ok": "631.978",
        "ko": "34.689"
    }
},
contents: {
"req_request-10573": {
        type: "REQUEST",
        name: "request",
path: "request",
pathFormatted: "req_request-10573",
stats: {
    "name": "request",
    "numberOfRequests": {
        "total": "60000",
        "ok": "56878",
        "ko": "3122"
    },
    "minResponseTime": {
        "total": "26",
        "ok": "26",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "45622",
        "ok": "45622",
        "ko": "22527"
    },
    "meanResponseTime": {
        "total": "24751",
        "ok": "25555",
        "ko": "10107"
    },
    "standardDeviation": {
        "total": "13564",
        "ok": "13477",
        "ko": "768"
    },
    "percentiles1": {
        "total": "29378",
        "ok": "29570",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "37108",
        "ok": "37225",
        "ko": "10011"
    },
    "percentiles3": {
        "total": "40721",
        "ok": "40734",
        "ko": "10051"
    },
    "percentiles4": {
        "total": "41739",
        "ok": "41762",
        "ko": "15318"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 4510,
    "percentage": 8
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 350,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 52018,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3122,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "666.667",
        "ok": "631.978",
        "ko": "34.689"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
