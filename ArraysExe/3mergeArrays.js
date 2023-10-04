function mergedArrays(arr1, arr2) {
  let mergedArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let els1 = arr1[i];
    let els2 = arr2[i];

    if (i % 2 == 0) {
      let elsAsNumber = Number(els1) + Number(els2);
      mergedArr.push(elsAsNumber);
    } else {
      let elsAsString = els1 + els2;
      mergedArr.push(elsAsString)
    }

  }
  console.log(mergedArr.join(` - `));

}
mergedArrays(
  ['5', '15', '23', '56', '35'],
  ['17', '22', '87', '36', '11']
);
