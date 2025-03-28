{
  let msg: unknown = 'hello world';
  msg = 100;
  // if (typeof msg === 'nuamber') {
  let total = (msg as number) + 10; // type assertion
  // }
  console.log(total);
}
