import { getProject1ById } from "@/services/project1";
import { redirect } from "next/navigation";
import React from "react";
import styles from "./page.module.css";

const IFrameProjectPage = async ({ params }: { params: { id: string } }) => {
  const project = await getProject1ById(params.id);
  if (!project) {
    redirect("/");
  }
  return (
    <div className={styles.container}>
      <div>Score 1 : {project.score1}</div>
      <div>Score 2 : {project.score2}</div>
      <div>
        <b>Score total : {project.scoreTotal}</b>
      </div>
    </div>
  );
};

export default IFrameProjectPage;
