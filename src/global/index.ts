import { App } from 'vue'
import registerElement from './register-element'
import iconComponents from './icon'
export function globalRegister(app: App): void {
  app.use(iconComponents)
  app.use(registerElement)
}
