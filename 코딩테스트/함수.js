function add(x, y=10){ // 아규먼트(인수)가 undefined 값을 가질 경우 초기값 지정 할 수 있음
    console.log(x+y);
};

add(10); // add(10, 20) 일경우 초기값보다 인수 값이 우선시 되어 30이 출력됨.

function print( ){ // 매개변수가 없어도 인수를 불러 와서 계산할 수 있다.
    console.log(arguments[0]-arguments[1]);
}

print(10,20);

function check(age){
    if(age>=18) return true;
    else return false;
};

console.log(check(20));
console.log(check(10));

// 재귀함쉬: 함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속 반복되는 것이다.
// exit code가 필요하다.
// 팩토리얼 재귀함수

function recursive (num){
    if(num <= 1) return 1;
    return num * recursive(num-1);
}

console.log(recursive(4));
