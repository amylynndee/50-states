import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'

let app = createApp(App).mount('#app')

app.config.globalProperties.$stateService = StateAPIService

.mount('#app')


