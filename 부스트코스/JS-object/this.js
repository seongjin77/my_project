// var kim = {
// name: 'kim',
// first:10,
// second:20,
// sum: function(f,s){
//     return f+s;
// }
// };

/* console.log(kim.sum(kim.first, kim.second));  */

/* 위 코드가 나쁘지는 않지만 비효율적이고 귀찮다 */

var kim = {
    name: 'kim',
    first:10,
    second: 20,
    sum: function(){
        return this.first + this.second;
    }
};

/* this는 보통 객체내에 메소드에서 객체를 가리키는 의미로 쓰인다 */

console.log('출력', kim.sum());

