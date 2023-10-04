function magicSum(arr, magicNum) {
  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {
      let els = arr[i] + arr[j];
      
      if (els == magicNum) {
        console.log(`${arr[i]} ${arr[j]}`);
      }
    }
  }

}
magicSum([1, 7, 6, 2, 19, 23],8);