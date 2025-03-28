// NewMemu는 default로 export 되어 중괄호 밖에 있음
import NewMenu, { test1 as t1, test2 } from './new-menu.js'; // 이름 충돌 가능성 있는 경우 as로 별칭 사용
t1();
test2();
class list {
  constructor(private NewMenu){
    this.menu = menu
  }
  render(){
    
  }
}
