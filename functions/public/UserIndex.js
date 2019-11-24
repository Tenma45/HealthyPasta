const EditProfile={template:'<div style="background-color: #FDA50B;">\
<v-container>\
    <div style="font-size: 28px;">\
        <v-icon large color="black">edit</v-icon>&nbsp;\
        <b>EDIT PROFILE</b>\
    </div>\
    <v-card width=500 class="mx-auto" color="white" outlined>\
            <v-card-text>\
            <div align="center" full-width><v-avatar size="200" color="black" ></v-avatar>\
                <div style="width: 250px;">\
                    <v-file-input\
                    accept="image/png, image/jpeg, image/bmp"\
                    prepend-icon="mdi-camera"\
                    placeholder="Upload Your Picture"></v-file-input>\
                </div>\
            </div>\
            <v-form class="black--text">\
            <b style="font-size:larger;">Username</b>\
                    <v-text-field outlined></v-text-field>\
                    <b style="font-size:larger;">Password</b>\
                    <v-text-field outlined></v-text-field>\
                <v-divider></v-divider>\
                <v-row>\
                    <v-col cols="12" sm="6">\
                        <b style="font-size:larger;">Name</b>\
                        <v-text-field outlined></v-text-field>\
                    </v-col>\
                    <v-col cols="12" sm="6">\
                        <b style="font-size:larger;">Surename</b>\
                        <v-text-field outlined></v-text-field>\
                    </v-col>\
                </v-row>\
                    <b style="font-size:larger;">Email</b>\
                    <v-text-field outlined></v-text-field>\
                <v-row>\
                    <v-col cols="12" sm="6">\
                        <b style="font-size:larger;">Bithday</b>\
                        <v-text-field outlined></v-text-field>\
                    </v-col>\
                    <v-col cols="12" sm="6">\
                        <b style="font-size:larger;">Phone No.</b>\
                        <v-text-field outlined></v-text-field>\
                    </v-col>\
                </v-row>\
                    <b style="font-size:larger;">Adress</b>\
                    <v-text-field outlined></v-text-field>\
                <v-row>\
                    <v-col cols="12" sm="4">\
                        <b style="font-size:larger;">Blood Type</b>\
                        <v-text-field outlined></v-text-field>\
                    </v-col>\
                    <v-col cols="12" sm="4">\
                        <b style="font-size:larger;">Weight</b>\
                        <v-text-field outlined></v-text-field>\
                    </v-col>\
                    <v-col cols="12" sm="4">\
                        <b style="font-size:larger;">Height</b>\
                        <v-text-field outlined></v-text-field>\
                    </v-col>\
                </v-row>\
                <b style="font-size:larger;">Personality</b>\
                <v-text-field outlined></v-text-field>\
            </v-form>\
            <v-divider></v-divider>\
        </v-card-text>\
        <v-card-actions>\
                <v-btn color="#FDA50B" class="mx-auto" large >\
                    Save\
                </v-btn>\
            </v-card-actions>\
    </v-card>\
</v-container>\
</div> '}

//before choose
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
            <v-dialog v-model="choose" width="500" >
                <template v-slot:activator="{ on }">
                    <v-btn color="#FDA50B"  x-large class="mx-auto" outlined depressed v-on="on" >
                        <span class="title font-weight-bold" >เลือก</span>
                    </v-btn>
                </template>
                <v-card >
                    <v-card-text class="black--text pt-5 text-center">
                        <span style="font-size: 24px;">คุณยืนยันที่จะเลือก Course นี้ ใช่หรือไม่?</span>
                        <div><v-icon size=120 color="#FDA50B">warning</v-icon></div>
                        <v-card-actions>
                                <v-btn color="black" class="font-weight-bold mx-auto" x-large outlined>
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="black" class="font-weight-bold mx-auto" x-large outlined >
                                    ยืนยัน
                                </v-btn>
                        </v-card-actions>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-card-actions>
        </v-col>
    </v-row>
</v-card-text>
</v-card>
</v-container>`}

//after choose
const Course2={template:`<v-container>
<div align="center"><img src="./pic/course-1.png" height="300"></div>
<div class="white--text" style="text-decoration: underline; font-size: 24px;" > Course ที่คุณเลือก</div>
<v-card color="black" outlined  max-width="1200">
  <v-card-text class="white--text subtitle-1">
      <v-row>
          <v-col col="12" sm="3">
              <div class="text-center"><img src="./pic/no-image-available-icon-6.jpg" height="150"></div>
          </v-col>

          <v-col col="12" sm="7">
          รายละเอียด : คอร์สนี้เป็นบลาๆสำหรับที่จะทำนู่นนี่นั่นเพื่อที่จะทำให้ร่างกายแข็งแรงและมีสุขภาพที่ดีเหมือนคนอื่นๆทั่วไป
          <br><br>
          วันที่ : 00/00/0000
          <br><br>
          Trainer ที่ดูแล : นายณภัทรพล แท่นมณี
          
                <v-dialog v-model="trainerinfo" width="500" >
                    <template v-slot:activator="{ on }">
                        <v-btn color="#FDA50B"  x-large class="mx-auto" depressed text v-on="on" >
                            <span class="subtitle-1 font-weight-bold" >ดูรายละเอียด</span>
                        </v-btn>
                    </template>
                    <v-card >
                        <v-card-text class="black--text pt-5">
                                <div align="center" full-width><v-avatar size="200" color="black" ></v-avatar>
                                </div>
                                <v-form class="black--text">
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <b style="font-size:larger;">Name</b>
                                            <v-text-field disabled outlined></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <b style="font-size:larger;">Surename</b>
                                            <v-text-field disabled outlined></v-text-field>
                                        </v-col>
                                    </v-row>
                                        <b style="font-size:larger;">Email</b>
                                        <v-text-field disabled outlined></v-text-field>
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <b style="font-size:larger;">Bithday</b>
                                            <v-text-field disabled outlined></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <b style="font-size:larger;">Phone No.</b>
                                            <v-text-field disabled outlined></v-text-field>
                                        </v-col>
                                    </v-row>
                                        <b style="font-size:larger;">Adress</b>
                                        <v-text-field disabled outlined></v-text-field>
                                    <b style="font-size:larger;">Personality</b>
                                    <v-text-field disabled outlined></v-text-field>
                                </v-form>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-col>

          <v-col col="12" sm="2">
          <v-card-actions>
              <v-dialog v-model="sche" width="500" >
                  <template v-slot:activator="{ on }">
                      <v-btn color="#FDA50B"  x-large class="mx-auto" outlined depressed tile v-on="on" >
                          <span class="subtitle-1 font-weight-bold" >กำหนดการ</span>
                      </v-btn>
                  </template>
                  <v-card width=500 class="mx-auto" color="white" outlined>
                        <v-card-text class="pt-5">
                        
                    </v-card-text>
                </v-card>
              </v-dialog>
          </v-card-actions>
          </v-col>
      </v-row>
  </v-card-text>
</v-card>
</v-container>`}

const Subscribe={template:'<div class="white">Subscribe</div>'}

const router=new VueRouter ({
    routes : [
        {path:'/editprofile', component:EditProfile},
        {path:'/subscribe', component:Subscribe},
        {path:'/course', component:Course},
        {path:'/course2', component:Course2},
    ]
})

new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),
    data (){
        return {
            user:false,
            offset:true,
            closeOnContentClick:false,
            choose:false, //ส่วนที่เพิ่มมา
            sche:false, //ส่วนที่เพิ่มมา
            trainerinfo:false, //ส่วนที่เพิ่มมา
            
        }
    },
})


