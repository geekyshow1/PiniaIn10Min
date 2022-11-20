import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// Create Pinia Instance
const pinia = createPinia()

const app = createApp(App)

// Use Pinia Instance
app.use(pinia)

app.mount('#app')
