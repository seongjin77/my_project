let num = 7;

console.log(`이숫자는 칠 ${num}`);

/* 객체의 얕은 복사 방법 */

let user = {
    name: 'seongjin',
    age: 28
};

/* for loop를 통한 방법 */

let admin ={}; // 아예 새로운 객체를 생성한다. let admin = user; 이렇게 쓰면 주소값을 그대로 복사하는거임

for (let key in user){
    admin[key] = user[key];
};



