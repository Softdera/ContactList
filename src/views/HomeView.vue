<template>
  <div class="Home">
  <h3 class="my-2">Welcome to Soft Academy</h3>
  <p>Please, fill the form below</p>
  
    <!--add-contact @add-contact="addContact()"></add-contact-->
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

        <div> 
          <!--router-link :to="`/add`" 
          class="btn btn-success">Add Contact</router-link>
        </div-->

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

        
        <div class="container mt-2 pt-4" v-if="contacts.length > 0">
            <div class="row">
              <div class="col-md-6" v-for="(contact, index) in contacts" 
              :key="index">
                  <div class="card my-3 list-group-item-success shadow-lg">
                    <div class="row align-items-center">
                      <div class="col-md-3">
                        <img :src="contact.photo" alt="contact-photo">
                      </div>
                    <div class="col-md-7">
                      <ul class="list-group ">
                        <li class="list-group-item">
                          Name: <span id="fw-bold name"> {{ contact.name }} </span>
                        </li>
                        <li class="list-group-item">
                          Email: <span id="fw-bold email" > {{ contact.email }} </span>
                        </li>
                        <li class="list-group-item">
                          Mobile: <span id="fw-bold mobile"> {{ contact.mobile }} </span>
                        </li>
                        <li class="list-group-item">
                          Company: <span id="fw-bold company"> {{ contact.company }} </span>
                        </li>
                        <li class="list-group-item">
                          Title: <span id="fw-bold title"> {{ contact.title }} </span>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2 pt-2">  
                        <div>
                            
                            <!--router-link to="/EditContact" -->
                            <!--router-link 
                            :to="`/EditContact/${contact.id}`" 
                            class="btn btn-info my-1"
                            @click="editContact(index)">
                             <i class="fa fa-pen"></i> 
                            </router-link-->       

                              <button class="btn btn-info my-1"
                            @click="editContact(index)">
                            <i class="fa fa-pen"></i> 
                            </button>
                        </div>
                      <div>
                        <button class=" btn btn-danger my-1"
                        @click="deleteContact(index)">
                        <i class=" fa fa-trash"></i></button>
                      </div>     
                    </div>
                </div>
                </div>
                </div>                          
              </div>
              </div>

              <!--edit-contact v-if="editingContact" 
                :contact="editingContact" @update-contact="updateContact">
              </edit-contact-->
</div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import AddContact from '../components/contacts/AddContact.vue'
import { EditContact } from "../components/contacts/EditContact.vue";



export default {
  name: 'HomeView',
  components: {
    AddContact,
   EditContact
   // HelloWorld
  },
  data (){
    return{
        
      newContact:  {
        name: '',
        photo: '',
        email: '',
        mobile: '',
        company: '',
        title: ''},

      editedContact: { ...this.contact },
        editingContact: false,
      /* editedContact: { name: '',
        photo: '',
        email: '',
        mobile: '',
        company: '',
        title: ''
      },*/
        contacts: [
    {
      id: 11,
      name: "Dera Soft",
      company: "Success Key",
      email: "soft@gmail.com",
      title: "Developer",
      mobile: 2345678,
      photo: "data:image/png;base64,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",
    },
    {
      id: 12,
      name: "Emma Chi",
      company: "e4e",
      email: "Derain@gmail.com",
      title: "Writer",
      mobile: 237775588,
      photo: "data:image/png;base64,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",
    },
    {
      name: "emmmmm",
      photo: "data:image/png;base64,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",
      email: "aaaaa@gmail.com",
      mobile: 90000009,
      company: "e4e",
      title: "Mr",
      id: 9,
    }
  ],
    }
  },
  methods: {

   /* addContact(){
            const newContact={
                name:this.name,
                email:this.email,
                photo: this.photo,
                mobile: this.mobile,
                company: this.company,
                title: this.title,
            };
            console.log('i Never chop');

            this.contacts.push(newContact)
            console.log('oya chop');

            this.newContact.name = ''
            this.newContact.email = ''
            this.newContact.photo = ''   
            this.newContact.company = ''   
            this.newContact.title = ''  
            this.newContact.mobile = '';

            console.log('Oya gimme food');

        },*/


 /* addContact(newContact) {
      this.contacts.push(newContact);{
      console.log('make money')
      
            this.newContact.name = ''
            this.newContact.email = ''
            this.newContact.photo = ''   
            this.newContact.company = ''   
            this.newContact.title = ''  
            this.newContact.mobile = '';
            console.log('new')};
        },*/

        /*addContact() {
          if(this.newContact){
            this.contacts.push({
              name:this.name,
                email:this.email,
                photo: this.photo,
                mobile: this.mobile,
                company: this.company,
                title: this.title,

            })
            console.log('newContact');
            this.newContact = '',
            console.log('oya dance');
          }
        },*/
addContact() {
  //this.contacts = [...this.contacts, this.newContact]
  this.contacts.push(this.newContact)

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
      }},
           
            
    
  deleteContact(index){
      this.contacts.splice(index, 1);
        },

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
    },
    }



    
  

</script>

<style scoped>
.Home{

 text-align: left;
 margin-left: 2.1rem;
 margin-top: 40px;
}
</style>
