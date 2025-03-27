let module1 = require('./module1.js');
let fs = require('fs');
let module2 = require('newlec-hello');
console.log(module2.hello());
// 1. 동기형 함수 사용
let data = fs.readFileSync('./data.txt', 'utf8');

// 2. 비동기형 콜백 함수 사용
let dataUseAsync = fs.readFile('./data1.txt', 'utf8', (error, data) => {
  console.log(data);
});
console.log(module1.add());
console.log(data);

// 3. 비동기형 프로미스 사용
// const promise = fs.promises.readFile('./data1.txt', 'utf8');
const promise = fs.readFile('./data1.txt', 'utf8');
// promise는 콜백을 담는 객체
promise
  .then(data => {
    console.log(data);
    return data.substring(0, 2);
  })
  .then(sub => {
    // 미들웨어 시스템
    console.log(sub);
  });

// 4. async/await 사용
(async () => {
  let data2 = await fs.readFile('./data1.txt', 'utf8'); // await 쓰면 끝날 때까지 기다림
  console.log(data2);
})();
