import { getProject1ById } from "@/services/project1";
import { redirect } from "next/navigation";
import React from "react";

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const project = await getProject1ById(params.id);
  if (!project) {
    redirect("/");
  }
  return (
    <div>
      <h1>{project.name}</h1>
      <ul>
        <li>Score 1 : {project.score1}</li>
        <li>Score 2 : {project.score2}</li>
        <li>
          <b>Score total : {project.scoreTotal}</b>
        </li>
      </ul>
    </div>
  );
};

export default ProjectPage;
