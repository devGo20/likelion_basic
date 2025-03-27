let f3;
x = 100;
let f1 = function() {
  x = 40;
  console.log(window.x, x);

  f3 = function() {
    console.log(x);
  };
};
console.log(window.x, x);
f1();
f3();
