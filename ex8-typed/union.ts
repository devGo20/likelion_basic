{
  let kor: number | string = 33;
  kor = '33';
  let eng: number;
  console.log(typeof eng);
  eng = undefined;
}

{
  type ID = string | number;
  let kor: ID = 33;
  kor = '33';
  let eng: number;
  console.log(typeof eng);
  eng = undefined;
}
