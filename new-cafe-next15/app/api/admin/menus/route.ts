import { MenuListDto } from '@/application/usecases/admin/menu/dto/MenuListDto';
import MenuListUsecase from '@/application/usecases/admin/menu/MenuListUsecase';
import { SbMenuRepository } from '@/infra/repositories/supabase/SbMenuRepository';
import { NextResponse } from 'next/server';
// adapter layer
// Usecase execute가 반환한 결과를 전달하는 역할만 한다.
export async function GET() {
  try {
    const menuRepository = new SbMenuRepository();
    const menuListUsecase = new MenuListUsecase(menuRepository);
    const menuListDto: MenuListDto = await menuListUsecase.execute();

    return NextResponse.json(menuListDto, { status: 200 });
  } catch (error) {
    console.error('Error in GET request:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
