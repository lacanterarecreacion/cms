import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'quehacemos',
  title: 'Que Hacemos',
  type: 'document',
  fields: [
    defineField({
      name: 'highlight',
      title: 'Trabajo destacado',
      initialValue: false,
      type: 'boolean'
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen destacada',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    // defineField({
    //   name: 'publishedAt',
    //   title: 'Publicado el',
    //   type: 'datetime',
    // }),

    defineField({
      name: 'description',
      title: 'Descripción corta',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Texto',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
