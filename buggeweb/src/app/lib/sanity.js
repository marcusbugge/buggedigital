import { createClient } from "next-sanity";
import { unstable_cache } from "next/cache";

// Bruk miljøvariabler hvis tilgjengelig, ellers fallback til hardkodede verdier
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "er5um3hh";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-21";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Bruk CDN i produksjon for bedre ytelse, men med tag-based revalidation
  useCdn: process.env.NODE_ENV === "production",
  // Legg til tag for revalidation
  perspective: "published",
});

export async function getProjects() {
  // Full prosjekt-payload benyttes kun på detaljsider; holdes her for bakover-kompat.
  // Bruk unstable_cache med tag for revalidation via webhook
  const getCachedProjects = unstable_cache(
    async () => {
      return await client.fetch(`*[_type == "project"] | order(order asc) {
        _id,
        title,
        color,
        description,
        shortDescription,
        where,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        client,
        industry,
        featured,
        order,
        services,
        tags
      }`);
    },
    ["projects"],
    {
      tags: ["projects"],
      revalidate: 3600, // Revalider hver time som fallback
    }
  );
  
  return await getCachedProjects();
}

export async function getProject(slug) {
  const getCachedProject = unstable_cache(
    async () => {
      return await client.fetch(
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
    },
    [`project-${slug}`],
    {
      tags: ["projects", `project-${slug}`],
      revalidate: 3600,
    }
  );
  
  return await getCachedProject();
}

export async function getNextProject(currentOrder) {
  // Først prøver vi å finne alle prosjekter og sortere dem etter order
  const getCachedNextProject = unstable_cache(
    async () => {
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
    },
    [`next-project-${currentOrder}`],
    {
      tags: ["projects"],
      revalidate: 3600,
    }
  );
  
  return await getCachedNextProject();
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

// Lettvekts liste for oversiktssider (kun felt som trengs i Carousel / teaser)
export async function getProjectsPreview() {
  const getCachedPreview = unstable_cache(
    async () => {
      return await client.fetch(`*[_type == "project" && featured == true] | order(order asc) {
        title,
        shortDescription,
        color,
        "slug": slug.current,
        order
      }`);
    },
    ["projects-preview"],
    {
      tags: ["projects", "projects-preview"],
      revalidate: 3600, // Fallback revalidation hver time
    }
  );
  
  return await getCachedPreview();
}
