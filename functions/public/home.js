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
            firstname: 'dummy',
            lastname: 'dummy',
            bod: '01/01/2000',
            email: 'dummy@gmail.com',
            address: 'dummy',
            tel: '0000000000',
            blood: 'A',
            weight: '100',
            height: '100',
            login:false,
            register:false,
            e1:0,
            required: function(v) { return v.length >0 || "This field is required"}, 
            minimum: v => v.length >=5 || "At least 5 characters",
            rules: {
            },
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

            console.log(this.$refs.form0.validate())
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
        resetForm: function (e) {
            this.username= ''
            this.password= ''
            this.repassword= ''
            this.firstname= ''
            this.lastname= ''
            this.bod= ''
            this.email= ''
            this.address= ''
            this.tel= ''
            this.blood= ''
            this.weight= ''
            this.height= ''
            this.login=false
            this.register=false
            this.e1=0 
            return true;
        }    
    }
})
