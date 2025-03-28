function Exam() {
  kor = 1;
  eng = 2;
  math = 3;

  return;
}
let exam1 = Exam();
console.log(exam1.kor, window.kor);
let exam2 = new Exam();
console.log(exam2.kor, window.kor);

// 기능이 없으면 객체 x, 데이터 구조임
function Exam2() {
  this.kor = 10;
  this.eng = 22;
  this.math = 30;
  this.total = function() {
    // 함수가 아닌 메소드
    return this.kor + this.eng + this.math;
  };
  this.avg = function() {
    return this.total() / 3;
  };
}
// 이런식으로 만들면 객체마다 메소드를 가지게 됨 객체 2개면 total, avg 메서드도 2개씩씩
function Exam3(kor, eng) {
  this.kor = 10;
  this.eng = 22;
  this.math = 30;
  this.total = function() {
    // 함수가 아닌 메소드
    return this.kor + this.eng + this.math;
  };
  this.avg = function() {
    return this.total() / 3;
  };
}

function Exam4(kor, eng) {}
// 모든 생성자는 프로토타입을 가짐. 기본 타입 객체
Exam.prototype.total = function() {
  return this.kor + this.eng + this.math;
};

let ar1 = [];
console.log(ar1.aaaa());
Array.prototype.aaaa = function() {
  console.log('aaaa');
};
const arr2 = [];
console.log(arr2.aaaa());
