import { CategoryListDto } from "@/application/usecases/category/dto/CategoryListDto";
import { GetCategoryListUsecase } from "@/application/usecases/category/GetCategoryListUsecase";
import { SbCategoryRepository } from "@/infra/repositories/supabase/SbCategoryRepository";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const getCategoryListUsecase = new GetCategoryListUsecase(
			new SbCategoryRepository()
		);

		const { searchParams } = new URL(request.url);
		const query = searchParams.get("query") || "";

		const categoryListDto: CategoryListDto =
			await getCategoryListUsecase.execute(query);

		return NextResponse.json(categoryListDto);
	} catch (error) {
		console.error("Error fetching categories:", error);
		return NextResponse.json(
			{ error: "Failed to fetch categories" },
			{ status: 500 }
		);
	}
}
