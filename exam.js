{
  let data = [1, 10, 9, 19999];
  data.sort((a, b) => b - a); // a - b 오름차순, b - a 내림차순 (숫자로 인식함)
  console.log(data);
}
{
  let data = [{ x: 8, y: 4 }, { x: 4, y: 5 }];
  // 파라미터에 정렬 기준 전달
  data.sort((e1, e2) => e1.x - e2.x); // 불린값 반환
  console.log(data);
}
let data = [2, 4, 22, 34, 16, 34, 23, 12, 45, 67, 89]
  // 1. 20보다 큰 값 필터링
  .filter(value => value > 20)
  // 2. 2배씩 곱
  .map(value => value * 2)
  // 3. 내림차순 정렬
  .sort((a, b) => b - a)
  // 4. 총합 구하기
  .reduce((acc, curr) => acc + curr, 0);
console.log(data);
