let input = ['a', 'b', 'c'];
let count = 0;

function permutation(arr, 인덱스시작, 인덱스끝){
    
    if(인덱스시작 === 인덱스끝) {
        count++;
        console.log(arr);
        return;
    }
    for( let i = 인덱스시작; i < arr.length; i++){
        
        permutation(arr, 인덱스시작 +1, 인덱스끝 );
    }
};
