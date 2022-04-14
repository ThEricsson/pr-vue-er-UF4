import {
    createApp
} from 'vue'

import App from './App.vue'
import ListModul from './components/ListModul'
import ModulRegister from './components/ModulRegister'

const app = createApp(App)
app.component('list-modul', ListModul)
app.component('modul-register', ModulRegister)
app.mount('#app')