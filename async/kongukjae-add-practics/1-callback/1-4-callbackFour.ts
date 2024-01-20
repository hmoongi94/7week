interface callbackFour {
  (a: number, b: number, multiplyCallback: (result: number) => void): void;
}

// function callbackFour(
//   a: number,
//   b: number,
//   multiplyCallback: (result: number) => void
// ) {
//   let sum = a + b;
//   multiplyCallback(sum);
// }

function callbackFour(a,b,multiplyCallback){
  let sum = a+ b;
  multiplyCallback(sum)
}

callbackFour(5, 5, (sumResult) => {
  let multiplyResult = sumResult * 2;
  console.log("곱셈 결과: ", multiplyResult);
});
