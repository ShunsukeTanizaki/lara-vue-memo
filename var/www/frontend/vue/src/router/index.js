import Vue from 'vue';
import VueRouter from 'vue-router'
import SaveContact from '../pages/contact/save-contact'
import IndexContact from '../pages/contact/index-contact'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'contact',
        component: IndexContact
    },
    {
        path: '/create/contact',
        name: 'create_contact',
        component: SaveContact
    },
    {
        path: '/edit/contact/:id',
        name: 'edit_contact',
        component: SaveContact
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router