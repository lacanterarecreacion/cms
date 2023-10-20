export default {
  type: "object",
  name: "BlockGallery",
  title: "Galeria",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "imagesGallery",
      title: "Images gallery",
      type: "array",
      of: [{
        type: "image",
        fields: [
          {
            name: 'alt',
            type: 'string',
          }
        ]
      }],
    },
  ],
  preview: {
    select: {
      title: `heading`,
      subtitle: "label",
      disabled: "disabled",
    },
    prepare({ title }) {
      return {
        title: `Galería: ${title ? title : 'Sin nombre' }`,
      };
    },
  },
};
