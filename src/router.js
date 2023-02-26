import { createRouter, createWebHistory } from "vue-router";

// router configure
const router = createRouter({
    history: createWebHistory(),
    routes: [
        // all routes
        // make all teachers the landing page
        { path: '/', redirect: '/teachers' },
        // all teachers
        { path: '/teachers', component: null },
        // individual teacher details page
        { path: '/teacher/:id', component: null, children: [
            // nested route to contact teacher
            { path: 'contact', component: null }, // /teachers/t1/contact
        ] },
        // register as teacher
        { path: '/register', component: null },
        // view all requests
        { path: '/requests', component: null },
        // 404 / page not found
        { path: '/:notFound(.*)', component: null },
    ]
});

export default router;