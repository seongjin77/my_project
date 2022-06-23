function solution(numbers, hand) {
    var answer = '';
    const keypad = {
        1: [1,1], 2: [1,2], 3:[1,3],
        4: [2,1], 5: [2,2], 6:[2,3],
        7: [3,1], 8: [3,2], 9:[3,3],
        '*': [4,1], 0: [4,2], '#':[4,3] 
    };

    let nowL = [4,1]; //현재 왼손위치
    let nowR = [4,3]; // 현재 오른손 위치

    numbers.forEach(num => {
        let numLocation = keypad[num]; // 숫자 위치
        console.log('이거 뭐? '+numLocation); 
        if(numLocation[1] === 1) {     // [1.1] [2.1]... 두번째 인덱스가 1이면 무조건 왼손
            // 왼손
            nowL = numLocation;
            answer += 'L';
        } else if (numLocation[1] === 3) {
            // 오른손
            nowR = numLocation;
            answer += 'R';
        } else {
            //위치확인해야함
            let distanceL = getDistance(nowL, numLocation); // 숫자와 왼손까지의 거리
            let distanceR = getDistance(nowR, numLocation); // 숫자와 오른손까지의 거리
            //console.log(`${distanceL}, ${distanceR}`)
            if(distanceL === distanceR) {
                if(hand === "left") {
                    nowL = numLocation;
                    answer += 'L';
                } else {
                    nowR = numLocation;
                    answer += 'R';
                }
            } else if (distanceL < distanceR ){
                nowL = numLocation;
                answer += 'L';
            } else {
                nowR = numLocation;
                answer += 'R';
            }
        }
        //console.log(`${num} ${numLocation}, ${answer}`)
    });

    //console.log(`비교 : ${answer}`);
    return answer;
}


function getDistance(arr1, arr2) {
    let result = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]); 
    return result; 
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";
console.log(solution(numbers, hand));
