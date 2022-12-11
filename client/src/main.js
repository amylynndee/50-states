import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'

let app = createApp(App)                               // let app = createApp(App).mount('#app') - this may have been my error error where array of state info was not displaying dev tools

app.config.globalProperties.$stateService = StateAPIService

app.mount('#app')                                       // changed mount('#app') to app.mount('#app') - this may have been my error where array of state info was not displaying dev tools


