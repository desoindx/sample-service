import { getProject2ById } from "@/services/project2";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const project = await getProject2ById(context.params.id);
  if (project) {
    return NextResponse.json({
      url: `${process.env.BASE_URL}/service2/projects/${context.params.id}`,
      data: project,
    });
  }

  return NextResponse.json("Not found", { status: 404 });
}
