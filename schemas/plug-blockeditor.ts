export default {
  type: "object",
  name: "PlugBlockeditor",
  title: "Texto",
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
  ],
  preview: {
    select: {
      title: `heading`,
      subtitle: "label",
      disabled: "disabled",
    },
    prepare({ title }) {
      return {
        title: `Texto: ${title}`,
      };
    },
  },
};
