import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "er5um3hh", // Du må erstatte dette med ditt faktiske prosjekt-ID fra Sanity
  dataset: "production",
  apiVersion: "2024-03-21",
  useCdn: false,
});

export async function getProjects() {
  const projects =
    await client.fetch(`*[_type == "project"] | order(order asc) {
    _id,
    title,
    color,
    description,
     shortDescription,
    where,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    client,
    industry,
    challenges,
    solution,
    developmentTime,
    services,
    projectUrl,
    tags,
    feedback,
    feedbackFrom,
    feedbackFromPosition,
    featured,
    order
  }`);
  return projects;
}

export async function getProject(slug) {
  const project = await client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      color,
      description,
       shortDescription,
      where,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "gallery": gallery[].asset->url,
      client,
      industry,
      challenges,
      solution,
      developmentTime,
      services,
      projectUrl,
      tags,
      featured,
      feedback,
      feedbackFrom,
      feedbackFromPosition,
      order
    }`,
    { slug }
  );
  return project;
}

export async function getNextProject(currentOrder) {
  // Først prøver vi å finne alle prosjekter og sortere dem etter order
  const allProjects = await client.fetch(
    `*[_type == "project"] | order(order asc) {
      _id,
      title,
      color,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      shortDescription,
      order
    }`
  );

  // Finn indeksen til gjeldende prosjekt
  const currentIndex = allProjects.findIndex((p) => p.order === currentOrder);

  // Hvis vi finner gjeldende prosjekt, returner neste i listen
  if (currentIndex !== -1 && currentIndex < allProjects.length - 1) {
    return allProjects[currentIndex + 1];
  }

  // Hvis vi er på siste prosjekt, returner det første
  return allProjects[0];
}

export async function getServices() {
  const services = await client.fetch(`
    *[_type == "project"] {
      services[]
    }
  `);

  // Fjern duplikater og flatten array
  const uniqueServices = [
    ...new Set(services.flatMap((p) => p.services || [])),
  ];
  return uniqueServices;
}
