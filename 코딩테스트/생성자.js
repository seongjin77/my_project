// new.target은 함수 또는 생성자가  new 연산자를 사용해서 호출됐는지를 감지할 수 있다.
function User(name){
    if(!new.target){
        return new User(name);
    }
    this.name = name;
}

let result = User('kim');
let result_2 = new User('chacha');

console.log(result);
console.log(result_2);



