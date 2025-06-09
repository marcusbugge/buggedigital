export default {
  name: "project",
  title: "Prosjekter",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Hovedbilde",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "challenges",
      title: "Utfordringer",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "solution",
      title: "Løsning",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "publishedAt",
      title: "Publisert dato",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
};
