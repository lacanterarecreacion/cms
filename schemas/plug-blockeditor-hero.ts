export default {
  type: "object",
  name: "PlugBlockeditorHero",
  title: "Hero",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Titulo",
    },
    {
      name: 'body',
      title: 'Descripcion',
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
        title: `Hero: ${title}`,
      };
    },
  },
};
