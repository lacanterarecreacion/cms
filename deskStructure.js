
import { AiOutlineFileText } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import { Gi3DMeeple, GiSpellBook, GiFruitTree } from "react-icons/gi";

export const myStructure = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Institucional')
        .icon(GiFruitTree)
        .child(
          S.list()
            .title('Institucional')
            .items([
              S.listItem()
                .title('Quienes Somos')
                .icon(AiOutlineFileText)
                .child(S.document().schemaType('quienes_somos').documentId('quienes_somos')),
              S.listItem()
                .title('Nuestra Historia')
                .icon(AiOutlineFileText)
                .child(S.document().schemaType('nuestra_historia').documentId('nuestra_historia')),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Calendario')
        .icon(BsCalendarCheck)
        .schemaType('calendarioLudico')
        .child(S.documentTypeList('calendarioLudico').title('Calendario')),
      S.divider(),
      S.listItem()
        .title('Recursos')
        .icon(Gi3DMeeple)
        .schemaType('recursos')
        .child(S.documentTypeList('recursos').title('Recursos')),
      S.divider(),
      S.listItem()
        .title('Que hacemos')
        .icon(GiSpellBook)
        .schemaType('quehacemos')
        .child(S.documentTypeList('quehacemos').title('Que hacemos')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'quienes_somos',
            'nuestra_historia',
            'recursos',
            'quehacemos',
            'calendarioLudico',
          ].includes(listItem.getId())
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
