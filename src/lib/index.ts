import { App } from 'vue-demi'
import Foo from './foo'

const components = [
  Foo
]
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  install,
  Foo
}

export default { install }
