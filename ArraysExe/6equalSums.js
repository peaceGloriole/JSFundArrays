// function findBalanceIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let leftSum = 0;
//     let rightSum = 0;

//     // Calculate the sum of elements on the left
//     for (let j = 0; j < i; j++) {
//       leftSum += arr[j];
//     }

//     // Calculate the sum of elements on the right
//     for (let k = i + 1; k < arr.length; k++) {
//       rightSum += arr[k];
//     }

//     // Check if the sums are equal
//     if (leftSum === rightSum) {
//       return i; // Found the balance index
//     }
//   }

//   return "no"; // No balance index found
// }

// const result = findBalanceIndex([1, 2, 3, 3]);
// console.log(result); 

function equalSums(arr) {
  let finalLeftSum = 0;
  let finalRightSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }
    finalLeftSum = leftSum;
    finalRightSum = rightSum;
  }
  
  if (finalLeftSum === finalRightSum) {
    console.log(arr[i]);
  } else {
    console.log(`no`);
  }
  
}

equalSums([1, 2, 3, 3]);