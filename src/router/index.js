import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { EditContact } from "../components/contacts/EditContact.vue";
import { AddContact } from "../components/contacts/AddContact.vue";
import { ContactList } from "../components/contacts/ContactList.vue";




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ContactList',
    name: 'ContactList',
    component: ContactList
  },
  {
    path: '/add',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/edit/:id',
    name: 'EditContact',
    component: EditContact
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
