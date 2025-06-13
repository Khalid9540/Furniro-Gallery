import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import VueAwesomePaginate from 'vue-awesome-paginate';
import 'vue-awesome-paginate/dist/style.css';
import browse from '@/components/Browse.vue';
import newArrival from './components/newArrival.vue';
import thePanner from '@/components/thePanner.vue';
import subPanner from '@/components/subPanner.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faTrash, faTag,
    faUserTie, faCalendar
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import {
    faMagnifyingGlass, faPhone,
    faLocationDot,
    faClock, faStar, faShareNodes,
    faHeart,
    faRepeat,
} from '@fortawesome/free-solid-svg-icons'
import {
    faCartShopping, faHandshake,
    faTrophy,
    faHeadset,
    faCertificate, faBars,
    faGrip,
    faFilter
} from '@fortawesome/free-solid-svg-icons'

library.add(faCartShopping, faHandshake, faTrophy, faHeadset, faCertificate)
library.add(faMagnifyingGlass, faBars, faGrip, faFilter, faStar)
library.add(faTrash, faPhone, faLocationDot, faClock, faShareNodes,
    faHeart,
    faRepeat,)
library.add(faTag,
    faUserTie,
    faCalendar)
library.add(faFacebookF, faTwitter, faLinkedinIn)
const app = createApp(App)

app.component('thePanner', thePanner)
app.component('newArrival', newArrival)
app.component('browse', browse)
app.component('subPanner', subPanner)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(VueAwesomePaginate);
app.use(createPinia())
app.mount('#app')