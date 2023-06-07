import { defineConfig, isDev } from 'sanity'
// import {visionTool} from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'
import { dashboardTool } from '@sanity/dashboard'
// import {
//   cloudinarySchemaPlugin,
// } from 'sanity-plugin-cloudinary'
import { myStructure } from './deskStructure'
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { media } from 'sanity-plugin-media'
const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'LaCanteraWeb',
  projectId: '1ekf84ne',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    media(),
    // visionTool(),
    // cloudinarySchemaPlugin(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Regenerar sitio con nuevas actualizaciones',
          sites: [
            {
              title: 'lacanterarecreacion',
              apiId: '082e0932-d79f-4ebc-839c-b214d0ca57e2',
              buildHookId: '646adb286ec56d04e2b271f5',
              name: 'lacanterarecreacion',
              url: 'https://lacanterarecreacion.netlify.app',
            }
          ]
        })
      ]
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],
  schema: {
    types: schemaTypes,
  },
})
