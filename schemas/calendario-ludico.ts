import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'calendarioLudico',
  title: 'Calendario Lúdico',
  type: 'document',
  fields: [
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
      name: 'image',
      title: 'Imagen destacada',
      type: 'cloudinary.asset',
      description: 'This asset is served from Cloudinary',
    }),
    defineField({
      name: 'link',
      title: 'Link al evento',
      type: 'url',
    }),
    defineField({
      name: 'start',
      title: 'Fecha y hora de Inicio del evento',
      type: 'datetime',
    }),
    defineField({
      name: 'end',
      title: 'Fecha y hora de fin del evento',
      type: 'datetime',
    }),
    defineField({
      initialValue: 'red',
      name: 'color',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          {value: 'purple', title: 'Presencial'},
          {value: '#ea580c', title: 'Virtual'},
        ],
      },
      title: 'Formato del evento',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripcion',
      type: 'text',
    }),
  ],
  fieldsets: [
    {
      description: 'Details of the drop that is about to be published',
      name: 'drop-details',
      title: 'Drop Details',
      options: { collapsed: true, collapsible: true },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
