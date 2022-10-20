module.exports = function getStatistics(numbers) {
    //implement the computation of statistics here
    var computedStats = new Object();
    var sum = 0;
    computedStats.min = Math.min(...numbers);
    computedStats.max = Math.max(...numbers);
    
    sum = numbers.reduce((partSum, a) => partSum + a, 0);
    computedStats.average = sum/numbers.length;

    console.log("sakthiLogicLog", computedStats);
    return computedStats;
}

