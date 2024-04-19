import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home_page',
  title: 'Pagina de inicio',
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
      name: 'buttonText',
      title: 'Texto del boton',
      type: 'string',
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria',
      type: 'BlockGallery',
    }),

  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
