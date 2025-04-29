export class MenuCreatedDto {
  constructor(
    public id: number, // 생성된 메뉴의 고유 ID
    public korName: string, // 한글 이름
    public engName: string // 영어 이름
  ) {}
}
