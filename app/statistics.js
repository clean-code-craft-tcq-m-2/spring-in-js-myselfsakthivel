module.exports = function getStatistics(numbers) {
    //implement the computation of statistics here
    var dataToReturn = {min: 0, max: 0, average: 0};
    var sum = 0;
    dataToReturn.min = Math.min(...numbers);
    dataToReturn.max = Math.max(...numbers);
    
    sum = numbers.reduce((partSum, a) => partSum + a, 0);
    dataToReturn.average = sum/numbers.length;

    return dataToReturn;
}

