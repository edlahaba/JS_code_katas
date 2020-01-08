// A popular interview question that requires you to determine if two numbers in an array
// sum to a specific value. A solution can be written that runs in linear time.

console.log(getSum([2,3,6,-1,4,4,1,-1,5,6,7,8], 3));
console.log(getSum([2,3,6,-1,4,4,1,-1,5,6,7,8], 5));
console.log(getSum([2,3,6,-1,4,4,1,-1,5,6,7,8], 4));

function getSum(arr, mynumber) {
  return [...new Set(arr)].map(filterSumOf).filter(removeNull)

  function filterSumOf(number, index, arr) {
    var addMatch = []
    arr.forEach(checkPreviousNumbers);

    function checkPreviousNumbers(lastNumber, lastIndex) {
      if(lastIndex <= index) return;

      if((number + lastNumber) == mynumber) {
        addMatch.push(number); addMatch.push(lastNumber);
      }
    }

    return addMatch.length ? addMatch : null;
  }
}

function removeNull(obj) {
  return obj != null;
}
