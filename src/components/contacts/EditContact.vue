<template>
    <div class="container my-5"
        v-if="editingContact">
        <div class="row">
            <div class="col-md-5">
                <h2>Edit Contact</h2>
                    <form @submit.prevent="updateContact">
                    <div class="mb-2">
                        <input required 
                        type="text" 
                        id="editname"
                        v-model="editedContact.name"
                        class="form-control" 
                        placeholder="Name" >
                    </div>
                    <div class="mb-2">
                        <input required  
                        v-model="editedContact.photo"
                        type="text" class="form-control" 
                        placeholder="Photo Url">
                    </div>
                    <div class="mb-2">
                        <input required 
                        id="editemail"
                        v-model="editedContact.email"
                        type="email" class="form-control"
                         placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input   type="number" 
                        v-model="editedContact.mobile"
                        id="editmobile"
                        class="form-control" 
                        placeholder="Mobile">
                    </div>
                    <div class="mb-2">
                        <input required  
                        id="editcompany"
                        v-model="editedContact.company"
                        type="text" class="form-control"
                         placeholder="Company">
                    </div>
                    <div class="mb-2">
                        <input required
                        id="edittitle"
                        v-model="editedContact.title"
                          type="text" class="form-control"
                           placeholder="Title">
                    </div>
                   
                    <button type="submit"
                    class="btn btn-success"> 
                       Submit Edit</button>

                    </form>
            </div>
            <div class="col-md-4">
                        <img :src="editedContact.photo" alt="Add.img">
            </div>
        </div>
        </div>

</template>

<script>
export default {
  name: 'EditContact',

  data() {
    return {
      editedContact: { ...this.contact },
        editingContact: false,
    }
  },
  methods: {
    editContact( contact) {
     this.editedContact = this.contacts[contact];
      this.editingContact = this.contacts;
     //this.editedContact = Object.assign({}, this.contacts[contact]);   
      console.log(this.editedContact),
      console.log('moan', this.editedContact);

    },
      
  updateContact() {
    //const index = this.contacts.findIndex(contact => contact.id === this.editedContact.id);
     // if (index !== -1) {
       // this.contacts.splice(index, 1, { ...this.editedContact });

     const index = this.contacts.findIndex(item => item.id === this.editedContact.id);
     this.contacts.splice(index, 1, this.editedContact);

        this.cancelEdit();
    
    
  // }
  },
    cancelEdit() {
      this.editingContact = false;

      this.editedContact = { name: '', 
      photo: '',
        email: '',
        mobile: '',
        company: '',
        title: ''
    };
    },

  }
}

</script>

  