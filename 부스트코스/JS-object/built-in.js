/* 내제되어 있는 객체가 있다. 제공하는 기능들을 잘 정리정돈 하여 제공하기 위해 객체를 통해
정리한다 */
/* Math라는 숫자와 관련된 객체에 random, PI, floor 등과 같은 함수를 담아둠 */

console.log('Math. PI', Math.PI);
console.log('Math.random()', Math.random());
console.log('Math.floor()', Math.floor());

/* 본인이 객체를 만들 수도 있다.  */

var Mymath = {
    PI: Math.PI,
    random: function(){
        return Math.random();
    },
    floor: function(){
        return Math.floor(val);
    }
};

