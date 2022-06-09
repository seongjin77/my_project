function sss (num){
    this.num = num;
    this.함수 = function (s){
        return s + 3* this.num;
        
    }

}

let coo = new sss(4);

console.log(coo.함수(3));

//생성자 함수는 new 연산자를 꼭 써야함. 안쓰면 일반함수로 호출됨. 프로퍼티 값을 주려면 this 사용 안쓰면 작동안함.
// new 연산자를 써서 붕어빵 기계처럼 찍어 낸 이후 변수에 담아서 사용.

const bar = function 생성(num){
    this.num = num
}

let koo = new bar(5);

console.log(koo);

// 함수 표현식을 쓸때는 new 연산자에 변수 식별자를 붙여줘야함. 함수이름을 붙여주는건 함수 선언문!!
// 함수 표현식에 쓸때는 익명함수를 쓰는게 일반적이지만 이름을 붙여주면 새로만들어진 객체가 변수식별자가 아니라 함수 이름으로 설정됨.

