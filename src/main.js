import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faDeleteLeft,
  faPhone,
  faAddressBook,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { createStore } from 'vuex';
import Notifications from '@kyvg/vue3-notification';
import App from './App.vue';
import AddUser from './components/AddUser.vue';
import HomePage from './components/HomePage.vue';
import Error from './components/Error.vue';
import Contact from './components/Contact.vue';
import { Users } from './models/users';

const store = createStore({
  state() {
    return {
      calls: [],
      contacts: Users,
    };
  },
  mutations: {
    addCall(state, phone) {
      const callHorodating = Date.now();
      moment.locale('fr-FR');
      const date = new Date(callHorodating);
      const dateToRegister = moment(date).format('DD MMMM YYYY à HH:mm');
      state.calls.push(`${phone} le ${dateToRegister}`);
    },
    addContact(state, contact) {
      state.contacts.push(contact);
    },
    initialiseStore(state) {
      if (localStorage.getItem('phoneTel')) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('phoneTel'))));
      }
    },
  },
  getters: {},
});

store.subscribe((state) => {
  // Store the state object as a JSON string
  localStorage.setItem('phoneTel', JSON.stringify(state));
});

const routes = [
  { path: '/', component: HomePage },
  { path: '/addUser', name: 'AddUser', component: AddUser },
  { path: '/contact', name: 'Contact', component: Contact },

  {
    path: '/:catchAll(.*)',
    component: Error,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
library.add(faDeleteLeft, faPhone, faAddressBook, faCirclePlus);
createApp(App, {
  onExpand() {
    console.log('expand');
  },
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
})
  .use(store)
  .use(router)
  .use(Notifications)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
