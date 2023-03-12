import { createRouter, createWebHistory } from "vue-router";

// import TeacherDetail from './pages/teachers/TeacherDetail.vue';
import TeachersList from './pages/teachers/TeachersList.vue';
// import TeacherRegistration from './pages/teachers/TeacherRegistration.vue';
// import ContactTeacher from './pages/requests/ContactTeacher.vue';
// import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import NotFound from './pages/NotFound.vue'
// import UserAuth from './pages/auth/UserAuth.vue';
import store from "./store";


// load route asynchronously (lazy load)
const TeacherDetail = () => import('./pages/teachers/TeacherDetail.vue');
const TeacherRegistration = () => import('./pages/teachers/TeacherRegistration.vue');
const ContactTeacher = () => import('./pages/requests/ContactTeacher.vue');
const RequestsRecieved = () => import('./pages/requests/RequestsRecieved.vue');
const UserAuth = () => import('./pages/auth/UserAuth.vue');

// router configure
const router = createRouter({
    history: createWebHistory(),
    routes: [
        // all routes
        // make all teachers the landing page
        { path: '/', redirect: '/teachers' },
        // all teachers
        { path: '/teachers', component: TeachersList },
        // individual teacher details page
        { path: '/teachers/:id', component: TeacherDetail, props: true, children: [
            // nested route to contact teacher
            { path: 'contact', component: ContactTeacher }, // /teachers/t1/contact
        ] },
        // register as teacher
        { path: '/register', component: TeacherRegistration, meta: { requiresAuth: true } },
        // view all requests
        { path: '/requests', component: RequestsRecieved, meta: { requiresAuth: true } },
        // 404 / page not found
        { path: '/:notFound(.*)', component: NotFound },
        // user authentication page
        { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    ]
});

// global navigation guard
router.beforeEach(function(to, _, next){
    if(to.meta.requiresAuth && !store.getters.isAuthenticated){
        next('/auth');
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated){
        next('/teachers');
    } else {
        next();
    }
});

export default router;