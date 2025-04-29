export class MenuDto {
  // 생성자로 보호 모드
  constructor(
    public id: number,
    public korName: string,
    public engName: string
  ) {}
}
