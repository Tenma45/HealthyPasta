const Home={template:`<v-container> 
<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
</v-container>`}

const Course={template:`<v-container>
<div align="center"><img src="./pic/course-1.png" height="300"></div>
<div class="white--text" style="text-decoration: underline; font-size: 24px;" > เลือก Course ที่ใช่ด้วยใจที่ชอบ</div>
<v-card color="black" outlined  max-width="1200">
  <v-card-text class="white--text subtitle-1">
        <v-row>
            <v-col col="12" sm="3">
                <div class="text-center"><img src="./pic/no-image-available-icon-6.jpg" height="150"></div>
            </v-col>

            <v-col col="12" sm="7">
            รายละเอียด : คอร์สนี้เป็นบลาๆสำหรับที่จะทำนู่นนี่นั่นเพื่อที่จะทำให้ร่างกายแข็งแรงและมีสุขภาพที่ดีเหมือนคนอื่นๆทั่วไป
            </v-col>

            <v-col col="12" sm="2">
            <v-card-actions>
                <v-dialog v-model="choose2" width="500" >
                    <template v-slot:activator="{ on }">
                        <v-btn color="#FDA50B"  x-large class="mx-auto" outlined depressed v-on="on" >
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
  </v-card></v-container>`}

const router=new VueRouter ({
    routes : [
        {path:'', component:Home},
        {path:'/home', component:Home},
        {path:'/course', component:Course},
            
        
    ]
})

new Vue({
    el: '#app',
    router,
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
            choose2:false,
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
