import { createRouter, createWebHistory } from "vue-router";

import TeacherDetail from './pages/teachers/TeacherDetail.vue';
import TeachersList from './pages/teachers/TeachersList.vue';
import TeacherRegistration from './pages/teachers/TeacherRegistration.vue';
import ContactTeacher from './pages/requests/ContactTeacher.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import NotFound from './pages/NotFound.vue'
import UserAuth from './pages/auth/UserAuth.vue';

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
        { path: '/register', component: TeacherRegistration },
        // view all requests
        { path: '/requests', component: RequestsRecieved },
        // 404 / page not found
        { path: '/:notFound(.*)', component: NotFound },
        // user authentication page
        { path: '/auth', component: UserAuth},
    ]
});

export default router;