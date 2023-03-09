import Test2 from './Test2.vue'
import type { App } from 'vue'

Test2.install = (app: App) => {
  app.component('Test1', Test2)
}

export {
  Test2
}

export default Test2