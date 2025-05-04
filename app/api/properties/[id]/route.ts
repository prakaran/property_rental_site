import connectDB from "@/config/database";
import Property from "@/models/Property";
import { NextRequest } from "next/server";

interface GetSinglePropertyProp {
  params: {
    id: string;
  };
}

export const GET = async (
  request: NextRequest,
  { params }: GetSinglePropertyProp
) => {
  try {
    const { id } = await params;
    await connectDB();
    const property = await Property.findById(id);
    if (!property) return new Response("Property Not Found", { status: 404 });
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong.", { status: 500 });
  }
};
