function arraysRotation(arr, rotCount) {
  for (let i = 0; i < rotCount; i++) {
    let el = arr.shift(i);

    arr.push(el);
  }
  console.log(arr.join(` `));
}
arraysRotation([51, 47, 32, 61, 21], 2);