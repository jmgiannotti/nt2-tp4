import Vue from 'vue'
import VueRouter from 'vue-router'


import FormularioAv from './componentes/FormularioAv.vue'
import Estructura from './componentes/Estructura.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/formulario-av' },
        { path: '/Estructura', component: Estructura},
        { path: '/formulario-av', component: FormularioAv },
    ]
})



