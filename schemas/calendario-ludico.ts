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
      description: 'Servida desde Cloudinary',
      title: 'Imagen destacada',
      name: 'image',
      type: 'cloudinary.asset',
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
      name: 'body',
      title: 'Texto',
      type: 'blockContentCalendarioLudico',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
