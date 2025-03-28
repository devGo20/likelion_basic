{
  class Exam {
    constructor(public kor: number, public eng: number) {}
    total() {
      return this.kor + this.eng;
    }
  }
  // 빈 공백을 채울 수 있는?
  const exam: Exam = new Exam(100, 90);
}

{
  // 형식에 대한 구조 약속, 형식 제안
  interface Exam {
    kor: number;
    eng: number;
    total(): number;
  }

  class ExamImpl implements Exam {
    constructor(public kor: number, public eng: number) {}
    total() {
      return this.kor + this.eng;
    }
  }
}
