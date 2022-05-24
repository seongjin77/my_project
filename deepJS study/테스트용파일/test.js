console.log(x);

function foo(){
    
    console.log(x);
    var x ='sss'
}
var x = '구십';

foo();

/* 에러가 안뜨고 undefined값이 뜨는 이유는 호이스팅 되서 언디파인 값으로 초기화 됐기 때문 */