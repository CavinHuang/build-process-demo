import Test1 from './Test1.vue'
import type { App } from 'vue'

Test1.install = (app: App) => {
  app.component('Test1', Test1)
}

export {
  Test1
}

export default Test1
