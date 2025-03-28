// module 취급, 손대지 않고 재사용 하기
export default function Menu() {
  this.korName = '아메리카노';
  this.engName = 'Americano';
  this.price = 2000;
}

Menu.prototype.toJSON = function() {
  return {
    korName: this.korName,
    engName: this.engName,
    price: this.price
  };
};
