import { App } from 'vue-demi'
import Foo from './foo.vue'

Foo.install = (app: App) => {
  app.component(Foo.name, Foo)
}

export default Foo
