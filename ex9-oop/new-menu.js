import Menu from './menu.js';

export default function NewMenu() {
  // this.parent = new Memu(); // Memu를 부품으로 받는 것
}

// 아래 두 가지 방법
// NewMenu.prototype = Object.create(Memu.prototype);
NewMenu.prototype = new Memu();

let m1 = new NewMenu();
console.log(m1.toJSON());
{
  class NewMenu extends Menu {
    // Memu 틀을 확장, is 상속
    constructor() {
      super();
    }
  }
}

function test1() {
  console.log('test1');
}
function test2() {
  console.log('test2');
}

export { test1, test2 }; // 통으로 객체로 묶어서 노출 or export function ~
