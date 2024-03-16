<!-- ContactList.vue -->
<template>
    <div>
      <h2>Contact List</h2>
      <ul>
        <li v-for="(contact, index) in contacts" :key="index">
          <div>
            <strong>{{ contact.name }}
            </strong> - {{ contact.email }} - {{ contact.phone }}
            <button @click="editContact(contact)">Edit</button>
            <button @click="deleteContact(index)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactList',
    props: ['contacts'],
    methods: {
      editContact(contact) {
        this.$emit('edit-contact', contact);
      },
      deleteContact(index) {
        this.$emit('delete-contact', index);
      },
     
    },
    }
  
  </script>
  