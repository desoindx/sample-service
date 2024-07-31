import { createProject1, getProject1ById } from "@/services/project1";
import { redirect } from "next/navigation";

export default async function NewProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject1ById(params.id);
  if (!project) {
    await createProject1(params.id);
  }

  redirect(`/service1/projects/${params.id}`);
}
