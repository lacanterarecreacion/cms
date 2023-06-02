export const myStructure = (S) =>
  S.list()
    .title('Contenido')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !['quienes_somos'].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Institucional')
        .child(
          S.list()
            .title('Institucional')
            .items([
              S.listItem()
                .title('Quienes Somos')
                .child(
                  S.document().schemaType('quienes_somos').documentId('quienes_somos')
                ),
            ])
        ),
    ])
// .items([
//   ...S.documentTypeListItems().filter(listItem => !['noticias', 'categoria-noticias'].includes(listItem.getId())),
//   S.listItem()
//     // Give it a title
//     .title('Institucional')
//     .child(
//       // Make a list in the second pane called Blog
//       S.list()
//         .title('Quienes somos')
//         .items([
//           // Add the first list item
//           S.listItem()
//             .title('Noticias')
//             .schemaType('noticias')
//             .child(S.documentTypeList('noticias').title('Noticias')),
//           S.listItem()
//             .title('Categorias')
//             .schemaType('categoria-noticias')
//             .child(S.documentTypeList('categoria-noticias').title('Categorias')),
//         ])
//     ),
// ])
