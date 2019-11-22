new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data (){
        return {
            login:false,
            register:false,
            e1:0,
        }
    },
})

new Vue({
    el: '#form1',
    data: {
        errors: [],
        name: null,
        age: null,
        movie: null
      },
      methods:{
        checkForm: function (e) {
          if (this.name && this.age) {
            return true;
          }
    
          this.errors = [];
    
          if (!this.name) {
            this.errors.push('Name required.');
          }
          if (!this.age) {
            this.errors.push('Age required.');
          }
    
          e.preventDefault();
        }
      }
    })