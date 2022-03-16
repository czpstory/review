import { App } from 'vue'

import { Stamp, Calendar, Avatar, Iphone } from '@element-plus/icons-vue'
const iconComponents = [Stamp, Calendar, Avatar, Iphone]

export default function (app: App): void {
  for (const iconcpns of iconComponents) {
    app.component(iconcpns.name, iconcpns)
  }
}
