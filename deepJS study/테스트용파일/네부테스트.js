
function 별(n){

    let answer = '';

    for(let i =n; i> 0; i--){
       
        if(n % 2 ==0) answer += '*'
        console.log(answer);
    }

    return answer;

};// 함수 끝


별(10);