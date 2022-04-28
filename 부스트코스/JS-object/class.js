class person{

    constructor (name,first,second){
        this.name= name;
        this.first= first;
        this.second=second;
        
    };

};

var kim = new person('kim',10,20);
console.log('출력', kim);

/* class 안에서 constructor 함수는 객체가 생성될때 호출된다. */

// var kim = new Person('kim',10,50);
// var lee = new Person('lee',10,15);

// kim.sum = function(){
//     return "modified : "+ (this.first + this.second);
// };

// console.log('kim', kim.sum());
// console.log('lee', lee.sum());
