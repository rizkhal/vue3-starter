import type { App } from 'vue'
import type { ModuleNamespace } from 'vite/types/hot'

/**
 * Register layouts in the app instance
 *
 * @param {App<Element>} app
 */
export default {
  install(app: App<Element>) {
    const layouts = import.meta.glob<ModuleNamespace>('../layouts/**/*.vue', {
      eager: true
    })

    const components = import.meta.glob<ModuleNamespace>('../components/**/*.vue', {
      eager: true
    })

    Object.entries(layouts).forEach(([, layout]) => {
      app.component(layout?.default?.name, layout?.default)
    })

    Object.entries(components).forEach(([, component]) => {
      app.component(component?.default?.name, component?.default)
    })
  }
}
