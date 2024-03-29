import { defineField, defineType } from 'sanity'

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
      name: 'link',
      title: 'Link al evento',
      type: 'url',
    }),
    defineField({
      name: 'location',
      title: 'Lugar',
      description: 'Dirección donde se realizará la actividad',
      type: 'string',
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
    // {
    //   title: 'Varios días',
    //   name: 'multipleDays',
    //   initialValue: false,
    //   description: 'Activar si el evento dura más de un día. De ser así favor de poner el cronograma en la descripción. (por ahora :)',
    //   type: 'boolean'
    // },
    defineField({
      initialValue: 'red',
      name: 'color',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          { value: '#e9d5ff', title: 'Presencial' },
          { value: '#fed7aa', title: 'Virtual' },
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
    defineField({
      name: 'mainImage',
      title: 'Imagen destacada',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
