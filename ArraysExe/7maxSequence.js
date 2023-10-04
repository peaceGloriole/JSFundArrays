function maxSequence(arr) {
  let currSequence = [arr[0]];
  let maxSequence = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currSequence.push(arr[i]);// if current index is equal to the index before the loop
    } else {
      currSequence = [arr[i]];// else if not make the new array to start with the last loop
    }

    if (currSequence.length > maxSequence.length) {
      maxSequence = currSequence.slice();// if the length of curr is longer, update the max
    }
  }

  console.log(maxSequence.join(` `));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);