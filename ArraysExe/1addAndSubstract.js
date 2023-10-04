function addSubstract(arr) {
  let newArr = [];
  let sumOld = 0;
  let sumNew = 0;

  for (let i = 0; i < arr.length; i++) {

    let num = arr[i];
    sumOld += num;
      
    if (num % 2 == 0) {
      num += i;
    } else {
      num -= i;
    }
    sumNew += num;
    
    newArr.push(num);
  }
  console.log(newArr);
  console.log(sumOld);
  console.log(sumNew);
}

addSubstract([5, 15, 23, 56, 35]);