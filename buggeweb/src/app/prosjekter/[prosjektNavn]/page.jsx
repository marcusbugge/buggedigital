import React from "react";
import ProjectLayout from "../ProjectLayout";
import AboutProject from "../AboutProject";
import Challenges from "../Challenges";
import Feedback from "../Feedback";
import NextProject from "../NextProject";
import { getProject, getNextProject } from "../../lib/sanity";

export default async function Page({ params }) {
  const project = await getProject(params.prosjektNavn);

  if (!project) {
    return <div>Prosjektet ble ikke funnet</div>;
  }

  const nextProject = await getNextProject(project.order);

  console.log("Current project order:", project.order);
  console.log("Next project:", nextProject);

  return (
    <div>
      <ProjectLayout project={project} />
      <AboutProject project={project} />
      <Challenges project={project} />
      <Feedback project={project} />
      <NextProject nextProject={nextProject} />
    </div>
  );
}
