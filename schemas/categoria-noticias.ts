import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'categoria-noticias',
  title: 'Categorias de Noticias',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
  ],
})
