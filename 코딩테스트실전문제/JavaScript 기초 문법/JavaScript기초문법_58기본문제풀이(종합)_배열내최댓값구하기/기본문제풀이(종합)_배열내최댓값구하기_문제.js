/* 6. 배열 내 최대값 구하기 */

/* user code */
function answer(arr) {
  let max;
  // let num = arr[0]
  // for(let i =0; i < arr.length; i++) {
    
  //   if(arr[i] > num) {
  //     num = arr[i];
  //   } 
  //   max = num;
  // }

  max = Math.max.apply(null,arr);
  return max;
}

/* main code */
let input = [
  // TC: 1
  [1, 6, 5, 2, 3],
  // TC: 2
  [19, 41, 23, -4, 17],
  // TC: 3
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
