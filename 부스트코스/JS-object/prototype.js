
function Person(name,first,second){
    this.name= name,
    this.first=first,
    this.second= second
    
};

Person.prototype.sum = function(){
        return this.first + this.second;
} ;

var kim = new Person('kim',10,50);
var lee = new Person('lee',10,15);

kim.sum = function(){
    return "modified : "+ (this.first + this.second);
};

console.log('kim', kim.sum());
console.log('lee', lee.sum());

/* 객체의 속성들 (변수들)은 생성자 함수 안에 넣는 것이 일반적입니다. 

객체의 메소드들은 생성자의 prototype에 추가하는 것이 일반적인 패턴입니다.  

프로토타입은 객체내 메소드를 공유할 수 있게 해준다.

장점은. 객체를 생성할때마다 함수를 다시 만들지 않아도 됨으로 캐시나 속도측면에서 부담을 
덜 준다

*/

