/* 수열 최소값 위치 */

/* user code */
function answer(nums) {
  let result = [];

  //1. 최솟값을 걸러내라

  // let min = Math.min.apply(null,nums); 작동됨
  for(let i=0; i<nums.length; i++) {

    if(!minnum){
     let minnum = nums[i];
    }

    if(minnum>nums[i]){
      minnum = nums[i];
    }


  }


  //2. 찾아낸 최솟값을 메소드로 걸러내라
  

  return result;
}

/* main code */
let input = [
  // TC: 1
  [5, 2, 10, 2],

  // TC: 2
  [4, 5, 7, 4, 8],

  // TC: 3
  [12, 11, 11, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
