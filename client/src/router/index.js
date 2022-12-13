import { createRouter, createWebHashHistory } from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import NotFound from '@/components/NotFound'        // lab 14

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        },
        {
            path: '/:pathMatch(.*)*',           // lab 14
            name: 'NotFound',                   // lab 14
            component: NotFound                 // lab 14
        }
    ] 
})

// list of routes (line 8-10) will be available to main.js