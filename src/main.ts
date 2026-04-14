import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MyBasicButton from './components/utility/MyBasicButton.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component('MyGlobalButton', MyBasicButton)
