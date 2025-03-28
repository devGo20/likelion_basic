// 값을 정확하게 지정할 수 있는 타입
let x: 'hello' = 'hello';
x = 'hello';
// x = 'howdy'; // 'hello'만 할당 가능

let level: 1 | 2 | 3 | 4;
level = 1;
console.log(level);
// level = 7; // 7은 1|2|3|4 여기에 assinable

let y: 2 = 2;
// y = 8;
