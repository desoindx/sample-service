import { getProject1ById } from "@/services/project1";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const project = await getProject1ById(context.params.id);
  if (project) {
    return NextResponse.json({
      url: `${process.env.BASE_URL}/service1/projects/${context.params.id}`,
      iframe: `${process.env.BASE_URL}/iframes/service1/projects/${context.params.id}`,
      data: project,
    });
  }

  return NextResponse.json("Not found", { status: 404 });
}
