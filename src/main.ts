import App from './App.vue'
import layout from './utils/theme'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'

import './scss/app.scss'

const app = createApp(App)

app.use(createPinia())
app.use(layout)
app.use(router)

app.mount('#app')
