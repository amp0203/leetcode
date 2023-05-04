var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
    let totalTime = arrivalTime + delayedTime;
    let hours = totalTime % 24;

    return hours;
};
