import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Páginas',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      fieldset: 'hero',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      fieldset: 'hero',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'http://lacanterarecreacion.netlify.app/{{slug}}',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen destacada',
      type: 'image',
      fieldset: 'hero',
    }),
    defineField({
      name: 'description',
      title: 'Descripción corta',
      type: 'text',
      fieldset: 'hero',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Secciones',
      description: 'Agrega, edita, y reordena secciones',
      of: [
        { type: 'BlockGallery' },
        { type: 'PlugBlockeditor' },
        { type: 'PlugBlockeditorHero' },
        { type: 'PlugBlockeditorGrillaDoble' },
      ],
    }),
  ],
  fieldsets: [
    {
      description: 'Titulo, imagen y descripción.',
      name: 'hero',
      title: 'Hero',
      options: { collapsed: true, collapsible: true },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
