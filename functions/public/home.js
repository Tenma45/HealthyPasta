new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data :{
        username: null,
        password: null,
        firstname: null,
        lastname: null,
        bod: null,
        email: null,
        address: null,
        tel: null,
        blood: null,
        weight: null,
        height: null,
        login:false,
        register:false,
        e1:0,
        errors: []       
        },
    methods: {
        /*registerOn() {
            alert("TEST")
            axios.post('/register2', {
                email: this.email,
                username: this.username
            })
        },*/
        checkForm1: function (e) {
            
            this.errors = [];
      
            if (!this.username) {
              this.errors.push('Username required.');
            }
            if (!this.password) {
              this.errors.push('Password required.');
            }
            if(this.errors.length===0){
                this.e1=2;
            }
          },
        checkForm2: function (e) {
            
            this.errors = [];
            
            if (!this.firstname) {
                this.errors.push('Name required.');
            }

            if(this.errors.length===0){
                return true;
            } 

            e.preventDefault();
        },
        resetForm: function (e) {
            this.username= null
            this.password= null
            this.firstname= null
            this.lastname= null
            this.bod= null
            this.email= null
            this.address= null
            this.tel= null
            this.blood= null
            this.weight= null
            this.height= null
            this.login=false
            this.register=false
            this.e1=0
            this.errors= []     
            return true;
        }    
    }
})