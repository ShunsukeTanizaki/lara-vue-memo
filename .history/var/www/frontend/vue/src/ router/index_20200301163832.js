import Vue from 'vue';
import VueRouter from 'vue-router'
import SaveContact from '../pages/contact/save-contact'
import IndexContact from '../pages/contact/index-contact'

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router