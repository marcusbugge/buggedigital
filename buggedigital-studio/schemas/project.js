export default {
  name: 'project',
  title: 'Prosjekter',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Farge',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Kunde',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'industry',
      title: 'Bransje',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'shortDescription',
      title: 'Kort beskrivelse',
      type: 'text',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'where',
      title: 'Hvor',
      type: 'text',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Bildegalleri',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'challenges',
      title: 'Utfordringer',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'solution',
      title: 'Løsning',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'developmentTime',
      title: 'Utviklingstid',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'services',
      title: 'Tjenester',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Webdesign', value: 'Webdesign'},
          {title: 'Webhosting', value: 'Webhosting'},
          {title: 'Webutvikling', value: 'Webutvikling'},
          {title: 'SEO', value: 'SEO'},
          {title: 'Digital markering', value: 'Digital markering'},
        ],
      },
    },

    {
      name: 'projectUrl',
      title: 'Prosjekt-URL',
      type: 'url',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },

    {
      name: 'featured',
      title: 'Fremhevet prosjekt',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'feedback',
      title: 'Tilbakemelding',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'feedbackFrom',
      title: 'Fra',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'feedbackFromPosition',
      title: 'Stilling',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Rekkefølge',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'mainImage',
    },
    prepare(selection) {
      const {title, client, media} = selection
      return {
        title: title,
        subtitle: client,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Visningsrekkefølge',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Publiseringsdato',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
}
