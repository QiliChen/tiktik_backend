import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemas from "./sanity/schemas";

export default defineConfig({
  name: 'default',
  title: 'tiktik_backend',

  projectId: '66qsptfk',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types:schemas,
  },
})
