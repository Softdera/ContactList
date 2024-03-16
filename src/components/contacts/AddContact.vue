<template>
 <div class="container my-5">
        <div class="row">
            <div class="col-md-5">
                <h2>Add New Contact</h2>
                    <form @submit.prevent="addContact">
                    <div class="mb-2">
                        <input required 
                        type="text" 
                        id="name"
                        v-model="newContact.name"
                        class="form-control" 
                        placeholder="Name" >
                    </div>
                    <div class="mb-2">
                        <input required  
                        v-model="newContact.photo"
                         id="photo"
                        type="text" class="form-control" 
                        placeholder="Photo Url">
                    </div>
                    <div class="mb-2">
                        <input required 
                        v-model="newContact.email"
                        id="email"
                        type="email" class="form-control"
                         placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input   type="number" 
                        v-model="newContact.mobile"
                        id="mobile"
                        class="form-control" 
                        required
                        placeholder="Mobile">
                    </div>
                    <div class="mb-2">
                        <input required  
                        v-model="newContact.company"
                        id="company"
                        type="text" class="form-control"
                         placeholder="Company">
                    </div>
                    <div class="mb-2">
                        <input required
                        v-model="newContact.title"
                        id="title"
                          type="text" class="form-control"
                           placeholder="Title">
                    </div>
                   
                    <button type="submit"
                    class="btn btn-success"> 
                        Add Contact</button>

                    </form>
            </div>
            <div class="col-md-4">
                        <img :src="newContact.photo" alt="Add.img">
            </div>
        </div>
        </div>
</template>

<script>
export default {
    name: 'AddContact',
    data(){
        return {
            newContact: {
        name: '',
        photo: '',
        email: '',
        mobile: '',
        company: '',
        title: ''},
        }
    },

    methods: {
addContact() {
     this.contacts = [...this.contacts, this.newContact]
      console.log('dance', this.newContact);
     this.clearForm();
    },

  clearForm(){
    console.log(this.newContact);
      this.newContact = {
        name: '',
        photo: '',
        email: '',
        mobile: '',
        company: '',
        title: ''
      }
  },
}}


</script>

<style>

</style>