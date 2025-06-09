import { useQuery } from "@tanstack/react-query";
import { client } from "./sanity";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const projects = await client.fetch(`
        *[_type == "project"] {
          title,
          shortDescription,
          color,
          slug,
          mainImage
        }
      `);
      return projects;
    },
    staleTime: 1000 * 60 * 5, // Data er "fersk" i 5 minutter
  });
};
