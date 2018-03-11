import 'normalize.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './components/App.vue';
import Contact from './components/Contact.vue';
import CreateContact from './components/CreateContact.vue';
import UpdateContact from './components/UpdateContact.vue';
import ViewContact from './components/ViewContact.vue';
import { createContact } from './support/createContact';
import { deleteContact } from './support/deleteContact';
import { findContactsByCriteria } from './support/findContactsByCriteria';
import { readContact } from './support/readContact';
import { readStorage } from './support/readStorage';
import { sortBy } from './support/sortBy';
import { updateContact } from './support/updateContact';
import { updateStorage } from './support/updateStorage';

Vue.use(Vuex);
Vue.use(VueRouter);

const writeContacts = updateStorage(localStorage, 'contacts');
const readContacts = readStorage(localStorage, 'contacts');

new Vue({
    el: '#app',
    render: h => h(App),
    store: new Vuex.Store({
        state: {
            lookup: [],
            contacts: readContacts([
                {
                    id: '3150863c-4d36-4dfc-a140-9eb8f90d3867',
                    firstName: 'Don',
                    lastName: 'Kooijman',
                    email: 'don.kooijman@wonderkind.com',
                    phone: '06-12345678'
                },
                {
                    id: 'dda9995e-21ce-4a47-b644-4c8a914c4246',
                    firstName: 'Faber',
                    lastName: 'Lonneke',
                    email: 'lonneke.faber@wonderkind.com',
                    phone: '06-12345678'
                },
                {
                    id: '8bf5260a-b3e0-4b79-85e3-93f058b54e69',
                    firstName: 'Amar',
                    lastName: 'Muric',
                    email: 'amar.muric@wonderkind.com',
                    phone: '06-12345678'
                }
            ])
        },
        mutations: {
            createContact: (state, contact) => state.contacts = createContact(
                state.contacts,
                contact
            ),
            updateContact: (state, contact) => state.contacts = updateContact(
                state.contacts,
                contact
            ),
            deleteContact: (state, id) => state.contacts = deleteContact(
                state.contacts,
                id
            )
        },
        getters: {
            contactsByCriteria: (state) => {
                return (criteria) => findContactsByCriteria([...state.contacts], criteria);
            },
            contactById: (state) => (id) => readContact(state.contacts, id)
        },
        plugins: [
            (store) => store.subscribe((mutation, state) => {
                state.contacts = sortBy(state.contacts, 'lastName');
                writeContacts(state.contacts);
            })
        ]
    }),
    router: new VueRouter({
        //mode: 'history',
        routes: [
            {
                path: '/create',
                component: CreateContact
            },
            {
                path: '/:id',
                component: Contact,
                children: [
                    {
                        path: '',
                        redirect: 'view'
                    },
                    {
                        path: 'view',
                        component: ViewContact
                    },
                    {
                        path: 'update',
                        component: UpdateContact
                    }
                ]
            }
        ]
    })
});

