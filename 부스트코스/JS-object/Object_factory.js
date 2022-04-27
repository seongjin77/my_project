
var kim = {
    name: 'kim',
    first:10,
    second: 20,
    sum: function(){
        return this.first + this.second;
    }
};
var lee = {
    name: 'lee',
    first:10,
    second: 10,
    sum: function(){
        return this.first + this.second;
    }
};

/* 보통 객체를 쓸때는 수공업처럼 하나씩 지정해줬지만 공장처럼 양산할 수 있다 */

console.log('출력', kim.sum());
console.log('출력2', lee.sum());

var d1 = new Date('2020-4-27');
console.log('날짜', d1.getFullYear());

/* 앞에 new라는 키워드를 사용하여 원래 있던 객체를 이용해 새로운 객체를 만들 수 있다. */

function Person(name,first,second){
    this.name= name,
    this.first=first,
    this.second= second,
    this.sum= function(){
        return this.first + this.second;
    }    
};

var kim = new Person('kim',10,50);

/* 함수를 호출하면 단순 함수안의 데이터들을 나열한 것 밖에 안되어 정의되지 않음. 
값이 return되지 않아 undefinded가 나옴 */
console.log('person()', Person());
console.log('new person()', kim.sum());
// constructor 생성자 = new , 앞에 new가 붙으면 함수를 객체로 만듦.

/* constructor function을 사용하면 객체를 만들때마다 객체를 다시 정의해줘야하는데
앞에 new를 사용한다면 양산할 수 있다. */
