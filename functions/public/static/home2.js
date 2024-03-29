const Home={template:`
<v-container> 
<template>
  <v-carousel>
    <v-carousel-item v-for="(item,i) in items" :key="i">
      <v-img :src="item.src"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>
</v-container>`,
data: () => ({
  items: [
    {
      src: '/pic/slider-1.png',
    },
    {
      src: '/pic/slider-2.png',
    },
    {
      src: '/pic/slider-3.png',
    },
    {
      src: '/pic/slider-4.png',
    },
  ]
})}
const Course={template:`<v-container>
<div align="center"><img src="./pic/course-1.png" height="300"></div>
<div class="white--text" style="text-decoration: underline; font-size: 24px;" > เลือก Course ที่ใช่ด้วยใจที่ชอบ</div>
<v-card color="black" outlined  max-width="1200">
  <v-card-text class="white--text subtitle-1">
        <v-row v-for="(course,i) in courseinfo" :key="i">
            <v-col col="12" sm="3">
                <div class="text-center"><img :src="course.pic" height="150"></div>
            </v-col>

            <v-col col="12" sm="7">
              {{course.detail}}
            </v-col>

            <v-col col="12" sm="2">
            <v-card-actions>
                <v-dialog v-model="choose2" width="500" >
                    <template v-slot:activator="{ on }">
                        <v-btn color="#FDA50B" rounded  x-large class="mx-auto" outlined depressed v-on="on" >
                            <span class="title font-weight-bold" >เลือก</span>
                        </v-btn>
                    </template>
                    <v-card >
                        <v-card-text class="black--text pt-5 text-center">
                            <span style="font-size: 24px;">กรุณาเข้าสู่ระบบก่อนเลือก Course</span>
                            <div><v-icon size=120 color="#FDA50B">warning</v-icon></div>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-card-actions>
            </v-col>
        </v-row>
    </v-card-text>
  </v-card></v-container>`,
  props:["courseinfo"]
  ,data: ()=>({
    choose2: false
  })
}

const router=new VueRouter ({
    routes : [
        {path:'', component:Home},
        {path:'/home', component:Home},
        {path:'/course', component:Course},
        {path:'/food', component:{template:'<div align="center" class="white--text " style="font-size: 50px; margin-top: 150px;"><v-icon color="white" size="100">error</v-icon>&nbsp;Sorry! This page not available.</div>'}},
        {path:'/exercise', component:{template:'<div align="center" class="white--text " style="font-size: 50px; margin-top: 150px;"><v-icon color="white" size="100">error</v-icon>&nbsp;Sorry! This page not available.</div>'}},
    ]
})

new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),
    data : function () {
        return {
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
            loginPass:false,
            loginError:'',
            loginErrorTrap:false,
            duplicateTrap:false,
            deplicate:false,
            e1:1,
            choose2:false,
            courseinfo:[],
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
        async submit1 (e) {
          e.preventDefault()
          try{
            const res = await axios.post('/checkuser',{
              username: this.username,
            })
            this.duplicate = res.data.duplicate
            this.duplicateTrap = res.data.duplicate
          }catch (err){
              console.log(err)
          }
            if (this.$refs.form0.validate()&&!this.duplicate){
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
        async checklogin (e){
          e.preventDefault()
          try{
            const res = await axios.post('/checklogin',{
              username: this.username,
              password: this.password
            })
           this.loginPass = res.data.pass
           this.loginError = res.data.error
          }catch (err){
              console.log(err)
          }
          if(this.loginPass)document.loginForm.submit();
          else{this.loginErrorTrap=true}
          
        },
         async fetchcourse(){
          try{
            const res = await axios.post('/fetchcourse',{
            })
             this.courseinfo=res.data
             router.push("/course")
          }catch (err){
              console.log(err)
          }
        },

    }
})
