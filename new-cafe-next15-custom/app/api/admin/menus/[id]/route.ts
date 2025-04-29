import { MenuCreatedDto } from '@/application/usecases/admin/menu/dto/MenuCreatedDto';
import MenuCreateUsecase from '@/application/usecases/admin/menu/MenuCreateUsecase';
import { SbMenuRepository } from '@/infra/repositories/supabase/SbMenuRepository';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const menuRepository = new SbMenuRepository(); // Interface Adapters 계층
    const menuCreateUsecase = new MenuCreateUsecase(menuRepository); // Use Case 계층
    const requestBody = await request.json();
    const menuCreatedDto: MenuCreatedDto = await menuCreateUsecase.execute(
      requestBody
    );

    return NextResponse.json(menuCreatedDto, { status: 201 }); // 클라이언트에 결과 반환
  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
