import { NextResponse } from "next/server";
import dbConnect from "@/lib/db/connection";
import products from "@/models/Products";
import User from "@/models/User";
import APIFilters from "../../utils/apiFilters";

export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);

    const resPerPage = parseInt(searchParams.get("resPerPage")) || 50;
    const queryParams = Object.fromEntries(searchParams.entries());

    const apiFilters = new APIFilters(products, queryParams).search().filter();

    let filteredProducts = await apiFilters.query.select("-choiceImages");
    const filteredProductsCount = filteredProducts.length;

    apiFilters.pagination(resPerPage);
    filteredProducts = await apiFilters.query.clone().select("-choiceImages");

    return NextResponse.json(
      {
        success: true,
        resPerPage,
        filteredProductsCount,
        filteredProducts,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
