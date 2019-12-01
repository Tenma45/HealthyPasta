var Home={template:`
<v-container> 
<template>
  <v-carousel>
    <v-carousel-item v-for="(item,i) in items" :key="i">
      <v-img :src="item.src"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>
</v-container>`,
props: ['items']
}

var EditProfile={template:'<div style="background-color: #FDA50B;">\
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
                    placeholder="Upload Your Picture" @click.prevent="not=true"></v-file-input>\
                </div>\
            </div>\
            <v-form action="/updateprofile" method="post" class="black--text" >\
            <b style="font-size:larger;" >Username</b>\
            <v-text-field outlined name="username" :disabled="true" v-model="info.username"></v-text-field>\
                <v-divider></v-divider>\
                <v-row>\
                    <v-col cols="12" sm="6">\
                        <b style="font-size:larger;" >Name</b>\
                        <v-text-field outlined name="firstname" v-model="info.firstname"></v-text-field>\
                    </v-col>\
                    <v-col cols="12" sm="6">\
                        <b style="font-size:larger;">Surename</b>\
                        <v-text-field outlined name="lastname" v-model="info.lastname"></v-text-field>\
                    </v-col>\
                </v-row>\
                    <b style="font-size:larger;">Email</b>\
                    <v-text-field outlined name="email" v-model="info.email"></v-text-field>\
                <v-row>\
                    <v-col cols="12" sm="6">\
                        <b style="font-size:larger;">Bithday</b>\
                        <v-text-field outlined name="bod" v-model="info.bod"></v-text-field>\
                    </v-col>\
                    <v-col cols="12" sm="6">\
                        <b style="font-size:larger;">Phone No.</b>\
                        <v-text-field outlined name="tel" v-model="info.tel"></v-text-field>\
                    </v-col>\
                </v-row>\
                    <b style="font-size:larger;">Adress</b>\
                    <v-text-field outlined name="address" v-model="info.address"></v-text-field>\
                <v-row>\
                    <v-col cols="12" sm="4">\
                        <b style="font-size:larger;">Blood Type</b>\
                        <v-text-field outlined name="blood" v-model="info.blood"></v-text-field>\
                    </v-col>\
                    <v-col cols="12" sm="4">\
                        <b style="font-size:larger;">Weight</b>\
                        <v-text-field outlined name="weight" v-model="info.weight"></v-text-field>\
                    </v-col>\
                    <v-col cols="12" sm="4">\
                        <b style="font-size:larger;">Height</b>\
                        <v-text-field outlined name="height" v-model="info.height"></v-text-field>\
                    </v-col>\
                </v-row>\
            <v-divider></v-divider>\
        <v-card-actions>\
          <v-btn type="submit" color="#FDA50B" class="mx-auto" large >\
            Save\
            </v-btn>\
        </v-card-actions>\
        </v-form>\
        </v-card-text>\
    </v-card>\
    <v-dialog v-model="not" width="300" >\
                <v-card>\
                    <v-card-text class="black--text pt-5 text-center">\
                        <span style="font-size: 24px;">ระบบยังไม่เปิดใช้งาน</span>\
                        <div><v-icon size=120 color="#FDA50B">warning</v-icon></div>\
                    </v-card-text>\
                </v-card>\
            </v-dialog>\
</v-container>\
</div> ',
props:['info','not'],
}
    

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
                    <v-btn color="#FDA50B" rounded  x-large class="mx-auto" outlined depressed v-on="on" >
                        <span class="title font-weight-bold" >เลือก</span>
                    </v-btn>
                </template>
                <v-card >
                    <v-card-text class="black--text pt-5 text-center">
                        <span style="font-size: 24px;">คุณยืนยันที่จะเลือก Course นี้ ใช่หรือไม่?</span>
                        <div><v-icon size=120 color="#FDA50B">warning</v-icon></div>
                        <v-card-actions>
                                <v-btn color="black" class="font-weight-bold mx-auto" x-large outlined @click="choose=false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn :to="{path:'/course2'}" color="black" class="font-weight-bold mx-auto" x-large outlined >
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
</v-container>`,
data (){
  return {
      user:false,
      offset:true,
      closeOnContentClick:false,
      choose:false, //ส่วนที่เพิ่มมา
  }
},}

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
                                            <v-text-field outlined></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <b style="font-size:larger;">Surename</b>
                                            <v-text-field outlined></v-text-field>
                                        </v-col>
                                    </v-row>
                                        <b style="font-size:larger;">Email</b>
                                        <v-text-field outlined></v-text-field>
                                    <v-row>
                                        <v-col cols="12" sm="6">
                                            <b style="font-size:larger;">Bithday</b>
                                            <v-text-field outlined></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                            <b style="font-size:larger;">Phone No.</b>
                                            <v-text-field outlined></v-text-field>
                                        </v-col>
                                    </v-row>
                                        <b style="font-size:larger;">Adress</b>
                                        <v-text-field outlined></v-text-field>
                                </v-form>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-col>

          <v-col col="12" sm="2">
          <v-card-actions>
            <v-row>
                
              <v-dialog v-model="sche" width="800" >
                  <template v-slot:activator="{ on }">
                      <v-btn color="#FDA50B"  x-large class="mx-auto" depressed v-on="on" >
                          <span class="subtitle-1 font-weight-bold" >กำหนดการ</span>
                      </v-btn>
                  </template>
                        <v-sheet height="64">
                            <v-toolbar flat color="orange darken-1">
                                <v-btn outlined class="mr-4" @click="setToday">
                                    Today
                                </v-btn>
                                <v-btn fab text small @click="prev">
                                <v-icon small>mdi-chevron-left</v-icon>
                                </v-btn>
                                <v-btn fab text small @click="next">
                                <v-icon small>mdi-chevron-right</v-icon>
                                </v-btn>
                                    <v-toolbar-title>{{ title }}</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-menu bottom right>
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                            outlined
                                            v-on="on"
                                            >
                                            <span>{{ typeToLabel[type] }}</span>
                                            <v-icon right>mdi-menu-down</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list>
                                            <v-list-item @click="type = 'day'">
                                                <v-list-item-title>Day</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item @click="type = 'month'">
                                                <v-list-item-title>Month</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                                                                                            
                            </v-toolbar>
                        </v-sheet>

                                            <!-- ส่วนทำตัว layer calender -->

                         <v-sheet height="600">                                                
                            <v-calendar
                                ref="calendar"
                                v-model="focus"
                                color="primary"
                                :events="events"
                                :event-color="getEventColor"
                                :event-margin-bottom="3"
                                :now="today"
                                :type="type"
                                @click:event="showEvent"
                                @click:more="viewDay"
                                @click:date="viewDay"
                                @change="updateRange"
                                ></v-calendar>
                                <v-menu
                                    v-model="selectedOpen"
                                    :close-on-content-click="false"
                                    :activator="selectedElement"
                                    full-width
                                    offset-x
                                >
                                    <v-card
                                        color="grey lighten-4"
                                        min-width="350px"
                                        flat
                                    >
                                        <v-toolbar
                                            :color="selectedEvent.color"
                                            dark
                                        >
                                           <v-btn icon>
                                            <v-icon>mdi-pencil</v-icon>
                                            </v-btn>
                                        <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                                            <v-spacer></v-spacer>
                                            <v-btn icon>
                                                <v-icon>mdi-heart</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon>mdi-dots-vertical</v-icon>
                                            </v-btn>
                                        </v-toolbar>
                                            <v-card-text>
                                            <span v-html="selectedEvent.details"></span>
                                            </v-card-text>
                                            <v-card-actions>
                                            <v-btn
                                            text
                                            color="secondary"
                                           @click="selectedOpen = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        </v-card-actions>
                                    </v-card>
                            </v-menu>
                        </v-sheet>
              </v-dialog>
            <br/>
            <br/>
            <br/>
              <v-dialog v-model="cancel" width="500" >
                <template v-slot:activator="{ on }">
                    <v-btn color="white" rounded  class="mx-auto" outlined depressed v-on="on" width=100 >
                        <span class="subtitle-1 font-weight-bold" >ยกเลิก</span>
                    </v-btn>
                </template>
                <v-card >
                    <v-card-text class="black--text pt-5 text-center">
                        <span style="font-size: 24px;">คุณยืนยันที่จะยกเลิก Course นี้ ใช่หรือไม่?</span>
                        <div><v-icon size=120 color="#FDA50B">warning</v-icon></div>
                        <v-card-actions>
                                <v-btn color="black" class="font-weight-bold mx-auto" x-large outlined @click="cancel=false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="black" class="font-weight-bold mx-auto" x-large outlined >
                                    ยืนยัน
                                </v-btn>
                        </v-card-actions>
                        </v-card-text>
                      <v-card>
                </v-dialog>
               
            </v-row>
          </v-card-actions>
          </v-col>
      </v-row>
  </v-card-text>
</v-card>
</v-container>`,
data (){
  return {
      user:false,
      offset:true,
      closeOnContentClick:false,
      choose:false, //ส่วนที่เพิ่มมา
      sche:false, //ส่วนที่เพิ่มมา
      trainerinfo:false, //ส่วนที่เพิ่มมา
      cancel:false,
      
      today: "today",
      focus: "today",
      type: 'month',
      typeToLabel: {
          month: 'Month',
          week: 'Week',
          day: 'Day',
          '4day': '4 Days',
      },

      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,

              events: [
                  {
                  name: 'Meeting with GF',
                  start: '2019-11-07',
                  end: "2019-11-09",
                  color: 'green',
                  details: 'Going to the school!',
                  },

                  {
                      name: 'Meeting with MF',
                      start: '2019-11-09',
                      end: "2019-11-12",
                      color: 'blue',
                      details: 'Going to the school!',
                  },
                  
              ],
      
  }
}, //ปิดของ data
computed: {
  title() {
    
    const { start, end } = this
    if (!start || !end) {
      return ''
    }
    const startMonth = this.monthFormatter(start)
    const endMonth = this.monthFormatter(end)
    const suffixMonth = startMonth === endMonth ? '' : endMonth
    const startYear = start.year
    const endYear = end.year
    const suffixYear = startYear === endYear ? '' : endYear
    const startDay = start.day + this.nth(start.day)
    const endDay = end.day + this.nth(end.day)
    
    switch (this.type) {
      case 'month':
        return `${startMonth} ${startYear}`
      case 'week':
      case '4day':
        return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
      case 'day':
        return `${startMonth} ${startDay} ${startYear}`
    }
    return ''
  },
  
  monthFormatter () {
    return this.$refs.calendar.getFormatter({
      timeZone: 'UTC', month: 'long',
    })
  },

},//ปิดของ computed


methods: {
  pushtest(e){
          
      rand=Math.floor(Math.random() * 1000);
      this.events.push({
        name: 'New Event',
        start: '2019-11-27',
        end: "2019-11-29",
        color: '#'+rand,
        details: 'No',
      })
    },
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }
        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }
        nativeEvent.stopPropagation()
      },

      updateRange ({ start, end }) {
        // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
        this.start = start
        this.end = end
      },

      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },
  },
}

//รอดำเนินการ
const CourseWait={template:`<v-container>
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
 
            </v-col>

          <v-col col="12" sm="2">
                
            <div align="center"><b style="font-size: 20px; color:#FDA50B;">กำลังดำเนินการ</b></div>
          <v-card-actions>
            <v-dialog v-model="cancel" width="500" >
                <template v-slot:activator="{ on }">
                    <v-btn color="white" rounded  class="mx-auto" outlined depressed v-on="on" width=100 >
                        <span class="subtitle-1 font-weight-bold">ยกเลิก</span>
                    </v-btn>
                </template>
                <v-card >
                    <v-card-text class="black--text pt-5 text-center">
                        <span style="font-size: 24px;">คุณยืนยันที่จะยกเลิก Course นี้ ใช่หรือไม่?</span>
                        <div><v-icon size=120 color="#FDA50B">warning</v-icon></div>
                        <v-card-actions>
                                <v-btn color="black" class="font-weight-bold mx-auto" x-large outlined @click="cancel=false">
                                    ยกเลิก
                                </v-btn>
                                <v-btn color="black" class="font-weight-bold mx-auto" x-large outlined >
                                    ยืนยัน
                                </v-btn>
                        </v-card-actions>
                </v-dialog>
               
            </v-row>
          </v-card-actions>
          </v-col>
      
  </v-card-text>
</v-card>
</v-container>`,
data (){
  return {
      user:false,
      offset:true,
      closeOnContentClick:false,
      choose:false, //ส่วนที่เพิ่มมา
      sche:false, //ส่วนที่เพิ่มมา
      trainerinfo:false, //ส่วนที่เพิ่มมา
      cancel:false,
      
      today: "today",
      focus: "today",
      type: 'month',
      typeToLabel: {
          month: 'Month',
          week: 'Week',
          day: 'Day',
          '4day': '4 Days',
      },

      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,

              events: [
                  {
                  name: 'Meeting with GF',
                  start: '2019-11-07',
                  end: "2019-11-09",
                  color: 'green',
                  details: 'Going to the school!',
                  },

                  {
                      name: 'Meeting with MF',
                      start: '2019-11-09',
                      end: "2019-11-12",
                      color: 'blue',
                      details: 'Going to the school!',
                  },
                  
              ],
      
  }//ปิดของ data
},
computed: {
  title() {
    
    const { start, end } = this
    if (!start || !end) {
      return ''
    }
    const startMonth = this.monthFormatter(start)
    const endMonth = this.monthFormatter(end)
    const suffixMonth = startMonth === endMonth ? '' : endMonth
    const startYear = start.year
    const endYear = end.year
    const suffixYear = startYear === endYear ? '' : endYear
    const startDay = start.day + this.nth(start.day)
    const endDay = end.day + this.nth(end.day)
    
    switch (this.type) {
      case 'month':
        return `${startMonth} ${startYear}`
      case 'week':
      case '4day':
        return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
      case 'day':
        return `${startMonth} ${startDay} ${startYear}`
    }
    return ''
  },
  
  monthFormatter () {
    return this.$refs.calendar.getFormatter({
      timeZone: 'UTC', month: 'long',
    })
  },

},//ปิดของ computed


methods: {
  pushtest(e){
          
      rand=Math.floor(Math.random() * 1000);
      this.events.push({
        name: 'New Event',
        start: '2019-11-27',
        end: "2019-11-29",
        color: '#'+rand,
        details: 'No',
      })
    },
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }
        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }
        nativeEvent.stopPropagation()
      },

      updateRange ({ start, end }) {
        // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
        this.start = start
        this.end = end
      },

      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },
  },
}


//subscribe
const Subscribe={template:`<div style="background-color: #FDA50B;">
<v-container>
<div class="black--text" style="text-decoration: underline; font-size: 35px;" > ต่ออายุสมาชิก</div>
<br/>
<div class="black--text" style="font-size: 20px;" > วันหมดอายุ : 14/06/2020</div>
<br/>
<br/>
<v-card color="#FDA50B" outlined  max-width="1200">
    <v-row>

    <!-- card 1 -->
    <v-col
        cols="12"
        sm="4"
    >
        <v-hover v-slot:default="{ hover }">
            <v-card
                class="mx-auto"
                color="grey lighten-4"
                max-width="300"
                style="box-shadow: 5px 5px 20px;"
                
            >
                  <v-img
                    :aspect-ratio="4/3"
                    src="./pic/s1.png"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;  opacity: 70%; "
                      >
                        <span style="margin-top: 70px; margin-left: 40px;">รายเดือน</span>
                      </div>
                    </v-expand-transition>
                  </v-img>
                  
                  <v-card-text
                    class="pt-6"
                    style="position: relative;"
                  >
                    
                    <div class="font-weight-light grey--text title mb-2" style="text-align: center" >สมัครสมาชิกแบบรายเดือน</div>
                    <h3 class="display-1 font-weight-light orange--text mb-2" style="text-align: center" >300 บาท/เดือน</h3>
                    <div class="font-weight-light title mb-2" style="text-align: center">
                    <br/>
                    <br/>
                    </div>
                    <v-dialog v-model="payment" width="400" >
                        <template v-slot:activator="{ on }">
                            <div align="center">
                                <v-btn
                                  color="orange"
                                  class="white--text"
                                  width=250                                                      
                                  large
                                  v-on="on"
                                  style="font-size: 20px;"
                                >
                                    เลือก
                                    </v-btn>
                            </div>
                        </template>

                        <v-card >
                                <v-card-title>กรุณากรอกรายละเอียดบัตรของท่าน</v-card-title>
                                <v-card-text class="black--text pt-5">
                                    <v-form>
                                        <b style="font-size:larger;" >Card No.</b>
                                        <v-text-field outlined></v-text-field>
                                        <b style="font-size:larger;">Password</b>
                                        <v-text-field outlined></v-text-field>
                                        <v-row>
                                        <v-col cols=12 sm=4>
                                        <b style="font-size:larger;">CCV/CVV</b>
                                        <v-text-field outlined></v-text-field>
                                        </v-col>
                                        </v-row>
                                    </v-form>
                                    
                                </v-card-text>
                                <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="black" class="font-weight-bold " large text @click="payment=false" >
                                            ยกเลิก
                                        </v-btn>
                                        <v-btn color="black" class="font-weight-bold " large text >
                                            ยืนยัน
                                        </v-btn>
                                </v-card-actions>
                        </v-card>
                        
                    </v-dialog>
                   
                </v-card-text>
                
            </v-card>
        </v-hover>
    </v-col>

    <!-- card 2 -->
    <v-col
        cols="12"
        sm="4"
    >
        <v-hover v-slot:default="{ hover }">
            <v-card
                class="mx-auto"
                color="grey lighten-4"
                max-width="300"
                style="box-shadow: 5px 5px 20px;"
                
            >
                  <v-img
                    :aspect-ratio="4/3"
                    src="./pic/s2.png"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;  opacity: 70%; "
                      >
                        <span style="margin-top: 70px; margin-left: 30px; font-size: 50px;">รายหกเดือน</span>
                      </div>
                    </v-expand-transition>
                  </v-img>

                  <v-card-text
                    class="pt-6"
                    style="position: relative;"
                  >
                    
                    <div class="font-weight-light grey--text title mb-2" style="text-align: center" >สมัครสมาชิกแบบรายหกเดือน</div>
                    <h3 class="display-1 font-weight-light orange--text mb-2" style="text-align: center" >250 บาท/เดือน</h3>
                    <div class="font-weight-light title mb-2" style="text-align: center">
                    รวม 1,600 บาท 
                    <br/> ประหยัดได้ 1 เดือน
                    </div>
                    <v-dialog v-model="payment" width="400" >
                            <template v-slot:activator="{ on }">
                                <div align="center">
                                    <v-btn
                                      color="orange"
                                      class="white--text"
                                      width=250                                                      
                                      large
                                      v-on="on"
                                      style="font-size: 20px;"
                                    >
                                        เลือก
                                        </v-btn>
                                </div>
                            </template>
    
                            <v-card >
                                    <v-card-title>กรุณากรอกรายละเอียดบัตรของท่าน</v-card-title>
                                    <v-card-text class="black--text pt-5">
                                        <v-form>
                                            <b style="font-size:larger;" >Card No.</b>
                                            <v-text-field outlined></v-text-field>
                                            <b style="font-size:larger;">Password</b>
                                            <v-text-field outlined></v-text-field>
                                            <v-row>
                                            <v-col cols=12 sm=4>
                                            <b style="font-size:larger;">CCV/CVV</b>
                                            <v-text-field outlined></v-text-field>
                                            </v-col>
                                            </v-row>
                                        </v-form>
                                        
                                    </v-card-text>
                                    <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="black" class="font-weight-bold " large text @click="payment=false" >
                                                ยกเลิก
                                            </v-btn>
                                            <v-btn color="black" class="font-weight-bold " large text >
                                                ยืนยัน
                                            </v-btn>
                                    </v-card-actions>
                            </v-card>
                            
                        </v-dialog>
                   
                </v-card-text>
                
            </v-card>
        </v-hover>
    </v-col>

    <!-- card 3 -->
    <v-col
        cols="12"
        sm="4"
    >
        <v-hover v-slot:default="{ hover }">
            <v-card
                class="mx-auto"
                color="grey lighten-4"
                max-width="300"
                style="box-shadow: 5px 5px 20px;"
                
            >
                  <v-img
                    :aspect-ratio="4/3"
                    src="./pic/s3.png"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;  opacity: 70%; "
                      >
                        <span style="margin-top: 70px; margin-left: 90px;">รายปี</span>
                      </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card-text
                    class="pt-6"
                    style="position: relative;"
                  >
                    
                    <div class="font-weight-light grey--text title mb-2" style="text-align: center" >สมัครสมาชิกแบบรายปี</div>
                    <h3 class="display-1 font-weight-light orange--text mb-2" style="text-align: center" >200 บาท/เดือน</h3>
                    <div class="font-weight-light title mb-2" style="text-align: center">
                    รวม 2,400 บาท 
                    <br/> ประหยัดได้ 4 เดือน
                    </div>
                    <v-dialog v-model="payment" width="400" >
                            <template v-slot:activator="{ on }">
                                <div align="center">
                                    <v-btn
                                      color="orange"
                                      class="white--text"
                                      width=250                                                      
                                      large
                                      v-on="on"
                                      style="font-size: 20px;"
                                    >
                                        เลือก
                                        </v-btn>
                                </div>
                            </template>
    
                            <v-card >
                                    <v-card-title>กรุณากรอกรายละเอียดบัตรของท่าน</v-card-title>
                                    <v-card-text class="black--text pt-5">
                                        <v-form>
                                            <b style="font-size:larger;" >Card No.</b>
                                            <v-text-field outlined></v-text-field>
                                            <b style="font-size:larger;">Password</b>
                                            <v-text-field outlined></v-text-field>
                                            <v-row>
                                            <v-col cols=12 sm=4>
                                            <b style="font-size:larger;">CCV/CVV</b>
                                            <v-text-field outlined></v-text-field>
                                            </v-col>
                                            </v-row>
                                        </v-form>
                                        
                                    </v-card-text>
                                    <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="black" class="font-weight-bold " large text @click="payment=false" >
                                                ยกเลิก
                                            </v-btn>
                                            <v-btn color="black" class="font-weight-bold " large text >
                                                ยืนยัน
                                            </v-btn>
                                    </v-card-actions>
                            </v-card>
                            
                        </v-dialog>
                   
                </v-card-text>
                
            </v-card>
        </v-hover>
    </v-col>

    </v-row>
   
  </v-card>
  
</v-container>
</div>`,
data : ()=>({
  payment:false
})
}

const Food ={template:'<div class="white">FOOD!!</div>'}
var TEST = Course
const router = new VueRouter ({
    routes : [
        {path:'', component:Home},
        {path:'/home', component:Home},
        {path:'/editprofile', component:EditProfile},
        {path:'/subscribe', component:Subscribe},
        {path:'/course', component:TEST},
        {path:'/course2', component:Course2},
        {path:'/coursewait', component:CourseWait},
        {path:'/food', component:{template:'<div align="center" class="white--text " style="font-size: 50px; margin-top: 150px;"><v-icon color="white" size="100">error</v-icon>&nbsp;Sorry! This page not available.</div>'}},
        {path:'/exercise', component:{template:'<div align="center" class="white--text " style="font-size: 50px; margin-top: 150px;"><v-icon color="white" size="100">error</v-icon>&nbsp;Sorry! This page not available.</div>'}},
        {path:'/message', component:{template:'<div align="center" class="white--text " style="font-size: 50px; margin-top: 150px;"><v-icon color="white" size="100">error</v-icon>&nbsp;Sorry! This page not available.</div>'}},
        {path:'/setting', component:{template:'<div align="center" class="white--text " style="font-size: 50px; margin-top: 150px;"><v-icon color="white" size="100">error</v-icon>&nbsp;Sorry! This page not available.</div>'}},
    ]
})

new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),
    data (){
        return {  
            info:{
              username: '',
              firstname:'',
              lastname: '',
              bod: '',
              email: '',
              address: '',
              tel: '',
              blood: '',
              weight: '',
              height: '',
            },
            NotAvaliable:false,
            user:false,
            offset:true,
            closeOnContentClick:false,
            choose:false, //ส่วนที่เพิ่มมา
            sche:false, //ส่วนที่เพิ่มมา
            trainerinfo:false, //ส่วนที่เพิ่มมา
            cancel:false,
            payment:false,
            cvv:false,
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
            ],
            today: "today",
            focus: "today",
            type: 'month',
            typeToLabel: {
                month: 'Month',
                week: 'Week',
                day: 'Day',
                '4day': '4 Days',
            },

            start: null,
            end: null,
            selectedEvent: {},
            selectedElement: null,
            selectedOpen: false,

                    events: [
                        {
                        name: 'Meeting with GF',
                        start: '2019-11-07',
                        end: "2019-11-09",
                        color: 'green',
                        details: 'Going to the school!',
                        },

                        {
                            name: 'Meeting with MF',
                            start: '2019-11-09',
                            end: "2019-11-12",
                            color: 'blue',
                            details: 'Going to the school!',
                        },
                        
                    ],
            
        }
    }, //ปิดของ data
    created: function(){
      this.fetchInfo()
    },
    computed: {
        title() {
          
          const { start, end } = this
          if (!start || !end) {
            return ''
          }
          const startMonth = this.monthFormatter(start)
          const endMonth = this.monthFormatter(end)
          const suffixMonth = startMonth === endMonth ? '' : endMonth
          const startYear = start.year
          const endYear = end.year
          const suffixYear = startYear === endYear ? '' : endYear
          const startDay = start.day + this.nth(start.day)
          const endDay = end.day + this.nth(end.day)
          
          switch (this.type) {
            case 'month':
              return `${startMonth} ${startYear}`
            case 'week':
            case '4day':
              return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
            case 'day':
              return `${startMonth} ${startDay} ${startYear}`
          }
          return ''
        },
        
        monthFormatter () {
          return this.$refs.calendar.getFormatter({
            timeZone: 'UTC', month: 'long',
          })
        },

      },//ปิดของ computed

      components: {
        'my-component':Home 
      },

    methods: {
      alerttest() {
        alert("TEST")
      },
      async fetchprofile(){
        try{
          const res = await axios.post('/fetchprofile',{
          })
           this.info=res.data
           router.push("/editprofile")
        }catch (err){
            console.log(err)
        }
      },
      async fetchInfo(){
        try{
          const res = await axios.post('/fetchprofile',{
          })
           this.info=res.data
        }catch (err){
            console.log(err)
        }
      },
        pushtest(e){
                
            rand=Math.floor(Math.random() * 1000);
            this.events.push({
              name: 'New Event',
              start: '2019-11-27',
              end: "2019-11-29",
              color: '#'+rand,
              details: 'No',
            })
          },
            viewDay ({ date }) {
              this.focus = date
              this.type = 'day'
            },
            getEventColor (event) {
              return event.color
            },
            setToday () {
              this.focus = this.today
            },
            prev () {
              this.$refs.calendar.prev()
            },
            next () {
              this.$refs.calendar.next()
            },
            showEvent ({ nativeEvent, event }) {
              const open = () => {
                this.selectedEvent = event
                this.selectedElement = nativeEvent.target
                setTimeout(() => this.selectedOpen = true, 10)
              }
              if (this.selectedOpen) {
                this.selectedOpen = false
                setTimeout(open, 10)
              } else {
                open()
              }
              nativeEvent.stopPropagation()
            },

            updateRange ({ start, end }) {
              // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
              this.start = start
              this.end = end
            },

            nth (d) {
              return d > 3 && d < 21
                ? 'th'
                : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
            },
    }
})


