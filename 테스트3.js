

function solution(answers) {
    var answer = [];
    const student1 = [];
    const student2 = [];
    const student3 = [];
    // 정답 배열의 각 인덱스랑 학생이 찍은 패턴답의 수와 일치해야한다.
    let num = 1;
    while(student1.length < answers.length){ // 정답의 길이는 유동적으로 바뀌기 때문에 while문 사용. 정답의 길이만큼 학생1의 패턴에 맞춰 배열에 넣어줌. 넣어준 배열과 정답의 배열의 인덱스를 각각 비교하여 정답 수를 센다.
        
            student1.push(num);
            num++
        
    }
    
    
    return student1
}

let answers = [1,2,3,4,5];
console.log(solution(answers));