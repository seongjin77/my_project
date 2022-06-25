const person = {
    name: 'Lee',
    foo(cb){
        setTimeout(cb.bind(this), 100); // person 자리에 this도 가능. 결국 이 시기에선 this는 foo메서드를 호출한 객체 person을 가리키기때문
    }
};

person.foo(function(){
    console.log(`안녕 내 이름은 ${this.name}.`);
});