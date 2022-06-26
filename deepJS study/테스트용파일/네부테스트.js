
function 별(n){

    
    for(let i =0; i< n; i++){
        let answer = '';
        
        for(let j=0; j<n; j++){
             answer += '*'
            }
            console.log(answer);
        }
        
    

};// 정사각형 별 찍기 함수 끝


// 별(5);

function 별1 (n){

    
    for(let i=0; i<n; i++){
        let answer = '';
        for(let j=0; j<=i; j++){
            answer += '*';
        }
        console.log( '이건뭐? '+ answer);
    }

}

별1(5); 