import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'nuestra_historia',
  title: 'Nuestra Historia',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen destacada',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'Descripción corta',
      type: 'text',
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
