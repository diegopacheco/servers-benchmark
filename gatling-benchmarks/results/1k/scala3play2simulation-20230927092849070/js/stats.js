var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "60000",
        "ok": "58347",
        "ko": "1653"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "6863",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "564",
        "ok": "67",
        "ko": "18107"
    },
    "standardDeviation": {
        "total": "4282",
        "ok": "518",
        "ko": "18428"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "1",
        "ok": "1",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "41",
        "ok": "6",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "3782",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 57326,
    "percentage": 96
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 51,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 970,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1653,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "882.353",
        "ok": "858.044",
        "ko": "24.309"
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
        "ok": "58347",
        "ko": "1653"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "6863",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "564",
        "ok": "67",
        "ko": "18107"
    },
    "standardDeviation": {
        "total": "4282",
        "ok": "518",
        "ko": "18428"
    },
    "percentiles1": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "1",
        "ok": "1",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "41",
        "ok": "6",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "10001",
        "ok": "3782",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 57326,
    "percentage": 96
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 51,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 970,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1653,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "882.353",
        "ok": "858.044",
        "ko": "24.309"
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
