import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contacto',
  title: 'Contacto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'mail',
      title: 'Mail',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube',
      type: 'url',
    }),
    defineField({
      name: 'enterateTitle',
      title: 'Titulo',
      type: 'string',
      fieldset: 'hero',
    }),
    defineField({
      name: 'enterateDescription',
      title: 'Descripción corta',
      type: 'text',
      fieldset: 'hero',
    }),
    defineField({
      name: 'enterateButtonText',
      title: 'Texto del boton',
      type: 'string',
      fieldset: 'hero',
    }),
    defineField({
      name: 'whatsapp',
      title: 'Grupo Whatsapp',
      type: 'url',
      fieldset: 'hero',
    }),
    defineField({
      name: 'telegram',
      title: 'Grupo Telegram',
      type: 'url',
      fieldset: 'hero',

    }),
  ],
  fieldsets: [
    {
      description: 'Enterate',
      name: 'hero',
      title: 'Enterate',
      options: { collapsed: false, collapsible: true },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
