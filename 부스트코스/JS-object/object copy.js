var memberArray = ['egoing', 'graphittie', 'leezhce'];

var i = 0;

/* console.group을 하면 들여쓰기가 됨 */
console.group('array loop');
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i+1;
}
console.groupEnd('array loop');

var memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezche'
};

memberObject['sientist'] = 'seongjin';
memberObject.artist = 'chacha';

console.group('object loop');

for( var name in memberObject ){
    console.log(name , memberObject[name]);
    /* memberObject.name으로 쓰면 undefined가 뜸 . 뒤에는 변수가 올 수 없음 */
};
console.groupEnd('object loop');