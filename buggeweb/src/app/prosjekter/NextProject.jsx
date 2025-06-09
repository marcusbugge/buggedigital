import NextProjectClient from "./NextProjectClient";
import { getProjects } from "../lib/sanity";

const NextProject = async () => {
  const projects = await getProjects();

  return <NextProjectClient projects={projects} />;
};

export default NextProject;
