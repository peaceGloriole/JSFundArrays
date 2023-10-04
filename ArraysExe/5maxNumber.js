function findTopNumbers(arr) {
  let topNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    isTop = true;

    for (let j = i + 1; j < arr.length; j++) {
      let nextNum = arr[j];

      if (nextNum >= currNum) {
        isTop = false;
        break;
      } 
    }
      
      if (isTop) {
        topNumbers.push(currNum)
      }

  }

  console.log(topNumbers.join(` `));
}
findTopNumbers([27, 19, 42, 2, 13, 45, 48]);

