export default {
  type: "object",
  name: "PlugBlockeditorGrillaDoble",
  title: "Grilla Doble",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: 'body',
      title: 'Texto',
      type: 'blockContent',
    },
    {
      name: "imagesGallery",
      title: "Images gallery",
      type: "array",
      of: [{ type: "image" }],
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
        title: `Grilla Doble: ${title}`,
      };
    },
  },
};
