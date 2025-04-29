import { Menu } from '@/domain/entities/Menu';
import { MenuRepository } from '@/domain/repositories/MenuRepository';

export default class MenuCreateUsecase {
  private menuRepository: MenuRepository;

  constructor(menuRepository: MenuRepository) {
    this.menuRepository = menuRepository;
  }

  async execute(menu: Menu) {
    try {
      const savedMenu = await this.menuRepository.save(menu); // 변수 이름 변경
      return savedMenu;
    } catch (error) {
      console.error('Error creating menu:', error);
      throw new Error('Failed to create menu');
    }
  }
}
