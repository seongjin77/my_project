/* 숫자 빈도수 구하기 */

/* user code */
function answer(s, e) {
  let result = [];
  let count =[];
 //1. s숫자부터 1씩올려서 e까지 같아지면 멈추고 배열에 넣어줌.
  while(s<=e){
    count.push(s);
    s++;
  }
 //2. 만들어진 모든 배열의 숫자를 문자열로 변경시킴.
 result = count.join();
 //3. 모든 문자열중에서 0부터 9까지 각각 몇개인지 세어줌. 각각의 수만큼 결과배열에 차례대로 푸시
  
  return result;
}

/* main code */
let input = [
  // TC: 1
  [129, 137],

  // TC: 2
  [1412, 1918],

  // TC: 3
  [4159, 9182],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
