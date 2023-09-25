import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/Dvud_/OneDrive/Escritorio/project1-Nuxt-TerrorMovies/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}