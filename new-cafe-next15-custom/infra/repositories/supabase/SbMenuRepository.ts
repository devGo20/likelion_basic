import { createClient } from '@/utils/supabase/server';
import { Menu } from '../../../domain/entities/Menu';
import { MenuRepository } from '../../../domain/repositories/MenuRepository';
import { IMenuRepository } from '@/domain/repositories/IMenuRepository';

export class SbMenuRepository implements MenuRepository {
  async findById(id: number): Promise<Menu> {
    // Implement logic to fetch a menu by ID from Supabase
    console.log('Menu ID:', id);
    return {
      id: id,
      korName: 'Sample Menu',
      engName: 'Sample Menu',
      price: 10.99
    };
  }

  async findAll(): Promise<Menu[]> {
    const supabase = await createClient();
    const { data } = await supabase.from('menu').select();
    const menus: Menu[] = data?.map(m => ({
      id: m.id,
      korName: m.kor_name,
      engName: m.eng_name,
      price: m.price
    })) || [];
    return menus;
  }

  async save(menu: Menu): Promise<Menu> {
    // Implement logic to save a menu to Supabase
    return menu;
  }

  async create(data: any): Promise<any> {
    // Supabase를 사용해 데이터 생성
    // ...구현 코드...
    return { id: 1, ...data }; // 예시 데이터 반환
  }
}
