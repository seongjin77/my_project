/* 달팽이 만들기 */

/* user code */
function answer(length) {
  let result = [];
  //1. result를 2차원 배열로 만듬
  for(let i= 0; i<length; i++) {
    result[i] = [];
  }
  // 22.반복문 패턴
  //1. 첫번째 열만 1번씩
  //2. 두번째부터 짝수만큼 length-1개 만큼 생성
  //3. 방향바꿈
    while(1){
      for(let i)
      if (length === 0) break;
    }

  return result;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  6,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
