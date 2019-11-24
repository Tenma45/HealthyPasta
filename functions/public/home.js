new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data : function () {
        return {

items: [
  {
    src: './pic/slider-1.png',
  },
  {
    src: './pic/slider-2.png',
  },
  {
    src: './pic/slider-3.png',
  },
  {
    src: './pic/slider-4.png',
  },
],
            username: '',
            password: '',
            cfpassword: '',
            firstname: '',
            lastname: '',
            bod: '',
            email: '',
            address: '',
            tel: '',
            blood: '',
            weight: '',
            height: '',
            login:false,
            register:false,
            e1:1,
            required: function(v) { return v.length >0 || "This field is required"}, 
            minimum: v => v.length >=5 || "At least 5 characters",
        }   
    },
        computed: {
            confirmpassword () { 
                return (this.cfpassword === this.password) || 'Password must match'
              }
            },
    methods: {
        submit2 (e) {
            if (this.$refs.form0.validate()){
              return true;
              }
              else {
                e.preventDefault();
              }
         },
        submit1 (e) {
            if (this.$refs.form0.validate()){
                this.firstname= ''
                this.lastname= ''
                this.bod= ''
                this.email= ''
                this.address= ''
                this.tel= ''
                this.blood= ''
                this.weight= ''
                this.height= ''
                this.e1=2; 
               return true;
              } 
              else {
                  e.preventDefault();
              }
          },
       cancel (e) {
            this.username= ''
            this.password= ''
            this.register=false
            this.e1=1 
            this.setDummy();
            return true;
        },
        removeDummy(){
            this.username= ''
            this.password= ''
            this.cfpassword= ''
            this.firstname= '',
            this.lastname= '',
            this.bod= '',
            this.email= '',
            this.address= '',
            this.tel= '',
            this.blood= '',
            this.weight= '',
            this.height= ''
        },
        setDummy (){
            this.firstname= 'dummy',
            this.lastname= 'dummy',
            this.bod= '01/01/2000',
            this.email= 'dummy@gmail.com',
            this.address= 'dummy',
            this.tel= '0000000000',
            this.blood= 'A',
            this.weight= '100',
            this.height= '100'
        },
        loginOn (e){
            axios.post('/checkuser')
            .then(res=>console.log(res))
            .catch(error=>console.log(error))
        }
    }
})
