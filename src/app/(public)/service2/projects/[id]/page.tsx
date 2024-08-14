import { getProject2ById } from "@/services/project2";
import { redirect } from "next/navigation";
import React from "react";

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const project = await getProject2ById(params.id);
  if (!project) {
    redirect("/");
  }
  return (
    <div>
      <h1>{project.name}</h1>
      <ul>
        <li>
          Nombre de personne concernée : {project.person.toLocaleString()}
        </li>
        <li>Argent economisé : {project.saved.toLocaleString()} euros</li>
      </ul>
    </div>
  );
};

export default ProjectPage;
