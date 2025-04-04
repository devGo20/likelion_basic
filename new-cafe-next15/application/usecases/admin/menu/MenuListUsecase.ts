import { MenuRepository } from '@/domain/repositories/MenuRepository';
import { MenuListDto } from './dto/MenuListDto';

export default class MenuListUsecase {
  private menuRepository: MenuRepository; // Add type definition for menuRepository

  constructor(menuRepository: MenuRepository) {
    this.menuRepository = menuRepository;
  }

  async execute() {
    try {
      const menus = await this.menuRepository.findAll(); // DTO 반환
      const menuListDto: MenuListDto = {
        menus: menus.map(menu => ({
          id: menu.id,
          korName: menu.korName, // Transform snake_case to camelCase
          engName: menu.engName // Ensure consistent naming
        })),
        totalCount: menus.length,
        totalPages: Math.ceil(menus.length / 10), // Assuming 10 items per page
        hasPreviousPage: false,
        hasNextPage: false,
        pages: []
      };
      return menuListDto;
    } catch (error) {
      console.error('Error fetching menus:', error);
      throw new Error('Failed to fetch menus');
    }
  }
}
