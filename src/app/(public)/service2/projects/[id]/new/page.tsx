import { createProject2, getProject2ById } from "@/services/project2";
import { redirect } from "next/navigation";

export default async function NewProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject2ById(params.id);
  if (!project) {
    await createProject2(params.id);
  }

  redirect(`/service2/projects/${params.id}`);
}
