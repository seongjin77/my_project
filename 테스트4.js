function solution(S) {
    var answer = '';
    let arr; // X부터 Y까지 원래 문자열
    let arr1; // X와 Y 순서바꾼 문자열
    // 문자열 s의 처음의 x부터 마지막의 y까지의 위치를 뒤집어라
    // 문자열에 x 또는 y가 없으면 그대로 반환. 즉 둘다 존재해야함.
    // S는 대문자로만 이루어짐.
   let X = S.indexOf('X'); //문자열에서 X와 Y의 인덱스 번호를 찾는다.
   let Y = S.indexOf('Y')

    if(X !==-1 || Y !== -1) {
       arr = S.substring(X,Y+1)
    } else {
        return answer = S;
    }
    
    arr1 = arr.split('').reverse().join(''); 
    
    answer = S.replace(arr,arr1);




    return answer;
}

let S = "AXYA";
console.log(solution(S));