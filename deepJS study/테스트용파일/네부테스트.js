
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
        console.log(answer);
    }

} // 삼각형 별 찍기 함수 끝

// 별1(5); 

function 별2(n){

    for(let i=0; i<n; i++){
        let answer ='';
        for(let j=n; j>i; j--){
            answer += '*'
        }
        console.log(answer);
        }

}// 역삼각형 별 찍기 함수 끝

// 별2(5);

function 별3(n){

    for(let i=0; i<n; i++){
        let answer ='';
        for(let j=n; j>i; j--){
            answer += ' '
        }

        for(let j=0; j<=(i*2); j++){
            answer += '*'
        }

        console.log(answer);

        }

}// 역삼각형 별 찍기 함수 끝

별3(5);