import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'colabora',
  title: 'Colabora',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción corta',
      type: 'text',
    }),
    defineField({
      name: 'video',
      title: 'Youtube Video',
      type: 'url',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen destacada',
      type: 'image',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'BlockGallery' },
        { type: 'PlugBlockeditor' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
