const EditProfile={template:'<div style="background-color: #FDA50B;">\
<v-container>\
    <div style="font-size: 28px;">\
        <v-icon large color="black">edit</v-icon>&nbsp;\
        <b>EDIT PROFILE</b>\
    </div>\
    <v-card width=500 class="mx-auto" color="white" outlined>\
            <v-card-text>\
            <div align="center" full-width> <v-avatar size="200" ><img src="./pic/user.png"></v-icon></v-avatar>\
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

const request={template:`<v-container>
<div align="center"><img src="./pic/trainer-1.png" height="300"></div>
                        <div class="white--text" style="text-decoration: underline; font-size: 24px;" > คำขอจากผู้ใช้</div>
                        <v-card color="black" outlined  max-width="1200">
                            <v-card-text class="white--text subtitle-1">
                                <v-row>
                                    <v-col col="8" sm="2">
                                        <div class="text-center"> <v-avatar size = 100><img src="./pic/user.png" height="150"></v-avatar></div>
                                    </v-col>
        
                                    <v-col col="8" sm="3">
                                    ชื่อ : นายมารวย มนัสนันท์ 
                                    <br/>
                                    หลักสูตร : เพิ่มกล้าม 
                                    <br/>
                                    วันที่ : 15-22 มีนาคม 2562
                                    </v-col>
        
                                    <v-col col="8" sm="3">
                                    <v-card-actions>
                                        <v-dialog v-model="choose" width="500" >
                                            <template v-slot:activator="{ on }">
                                                <v-btn color="#FDA50B"  x-large class="mx-auto" outlined depressed v-on="on" >
                                                    <span class="title font-weight-bold" >เพิ่ม</span>
                                                </v-btn>
                                            </template>
                                            <v-card >
                                                <v-card-text class="black--text pt-5 text-center">
                                                    <span style="font-size: 24px;">คุณยืนยันที่จะเพิ่มผู้ใช้รายนี้ ใช่หรือไม่?</span>
                                                    <div><v-icon size=120 color="#FDA50B">warning</v-icon></div>
                                                    <v-card-actions>
                                                            <v-btn color="black" class="font-weight-bold mx-auto" x-large outlined @click="choose=false" >
                                                                ไม่ยืนยัน
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
</v-container>`,
data (){
    
  return {

      user:false,
          offset:true,
          closeOnContentClick:false,
          calendar:false,
          choose:false,
          dialog: false,

    

    today: "today",
    focus: "today",
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },

    //calendar date input
    dates: ['2019-11-30', '2019-11-30'],

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

            valid: true,
            Title: '',
            TitleRules: [
              v => !!v || 'Title is required',
              v => (v && v.length <= 30) || 'Title must be less than 30 characters',
            ],
            Des: '',
            DesRules: [
              v => !!v || 'Description is required',
            ],
            Start: '',
            StartRules: [
              v => !!v || 'Start Date is required',
            ],
            End: '',
            EndRules: [
              v => !!v || 'End Date is required',
            ],
            select: null,
            
          checkbox: false,
        

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

          //calendar
          dateRangeText () {
            return this.dates.join(' ~ ')
          },

        },

                            


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

              validate () {
                if (this.$refs.form.validate()) {
                  this.snackbar = true
                }
              },
              reset () {
                this.$refs.form.reset()
              },
              resetValidation () {
                this.$refs.form.resetValidation()
              },

              
          },
        }

const cmanage={template:`<v-container>
<div align="center"><img src="./pic/trainer-2.png" height="300"></div>
                        <div class="white--text" style="text-decoration: underline; font-size: 24px;" > คอร์สที่อยู่ในการดูแล</div>
                        <v-card color="black" outlined  max-width="1200">
                            <v-card-text class="white--text subtitle-1">
                                <v-row>
                                    <v-col col="8" sm="2">
                                        <div class="text-center"> <v-avatar size = 100><img src="./pic/user.png" height="150"></v-avatar></div>
                                    </v-col>
        
                                    <v-col col="8" sm="3">
                                    ชื่อ : นายมารวย มนัสนันท์ 
                                    <br/>
                                    หลักสูตร : เพิ่มกล้าม 
                                    <br/>
                                    วันที่ : 15-22 มีนาคม 2562
                                    </v-col>
        
                                    <v-col col="8" sm="3">
                                    <v-card-actions>
                                        <v-dialog v-model="calendar" width="800" >

                                            <template v-slot:activator="{ on }">
                                                <v-btn color="#FDA50B"  x-large class="mx-auto" outlined depressed v-on="on" >
                                                    <span class="title font-weight-bold" >กำหนดการ</span>
                                                </v-btn>
                                            </template>

                                            <!-- ส่วนทำหัว layer calender -->

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

                                                        <v-btn color = "black" 
                                                        @click.stop="dialog = true">
                                                            <span style="color: orange;"
                                                            >Add</span>
                                                        </v-btn>&nbsp;&nbsp;

                                                        <v-dialog
                                                            v-model="dialog"
                                                            max-width="850"
                                                        >
                                                            <v-card>
                                                                <v-card-title class="headline">
                                                                    Add activity
                                                                </v-card-title>

                                                                <v-card-text>
                                                                    <v-form
                                                                        ref="form"
                                                                        v-model="valid"
                                                                        lazy-validation
                                                                    >
                                                                    <v-text-field
                                                                        v-model="Title"
                                                                        :counter="30"
                                                                        :rules="TitleRules"
                                                                        label="Title"
                                                                        required
                                                                    ></v-text-field>

                                                                    <v-text-field
                                                                        v-model="Des"
                                                                        :rules="DesRules"
                                                                        label="Description"
                                                                        required
                                                                    ></v-text-field>

                                                                                                                                            

                                                                            <!--calendar-->

                                                                            <v-row>
                                                                                    
                                                                                    <v-col cols="12" sm="0">
                                                                                    <v-text-field v-model="dateRangeText" label="Date range" prepend-icon="event" readonly></v-text-field>
                                                                                    
                                                                                    </v-col>
                                                                                    <v-col cols="12" sm="0" >
                                                                                        <v-date-picker v-model="dates" range></v-date-picker>
                                                                                    </v-col>
                                                                            </v-row>



                                                                            <v-checkbox
                                                                            v-model="checkbox"
                                                                            :rules="[v => !!v || 'You must agree to continue!']"
                                                                            label="Do you agree?"
                                                                            required
                                                                            ></v-checkbox>

                                                                            <v-btn
                                                                            color="error"
                                                                            class="mr-4"
                                                                            @click="reset"
                                                                            >
                                                                            Reset Activity
                                                                            </v-btn>

                                                            </v-form>
                                                            </v-card-text>

                                                            <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn
                                                                color="black"
                                                                text
                                                                @click="dialog = false"
                                                            >
                                                                ยกเลิก
                                                            </v-btn>

                                                            <v-btn
                                                                color="black"
                                                                text
                                                                @click="dialog = false"
                                                            >
                                                                ยืนยัน
                                                            </v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </v-dialog>

                                                        

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
          calendar:false,
          choose:false,
          dialog: false,

    

    today: "today",
    focus: "today",
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },

    //calendar date input
    dates: ['2019-11-30', '2019-11-30'],

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

            valid: true,
            Title: '',
            TitleRules: [
              v => !!v || 'Title is required',
              v => (v && v.length <= 30) || 'Title must be less than 30 characters',
            ],
            Des: '',
            DesRules: [
              v => !!v || 'Description is required',
            ],
            Start: '',
            StartRules: [
              v => !!v || 'Start Date is required',
            ],
            End: '',
            EndRules: [
              v => !!v || 'End Date is required',
            ],
            select: null,
            
          checkbox: false,
        

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

          //calendar
          dateRangeText () {
            return this.dates.join(' ~ ')
          },

        },

                            


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

              validate () {
                if (this.$refs.form.validate()) {
                  this.snackbar = true
                }
              },
              reset () {
                this.$refs.form.reset()
              },
              resetValidation () {
                this.$refs.form.resetValidation()
              },

              
          },}

const router=new VueRouter ({
  routes : [
      {path:'/course-request', component:request},
      {path:'/course-manage', component:cmanage},
      {path:'/editprofile', component:EditProfile},
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

        user:false,
        requesttrainer:[],
        clienttrainer:[],
            offset:true,
            closeOnContentClick:false,
            calendar:false,
            choose:false,
            dialog: false,

      
      userinfo:[],
      today: "today",
      focus: "today",
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },

      //calendar date input
      dates: ['2019-11-30', '2019-11-30'],

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

              valid: true,
              Title: '',
              TitleRules: [
                v => !!v || 'Title is required',
                v => (v && v.length <= 30) || 'Title must be less than 30 characters',
              ],
              Des: '',
              DesRules: [
                v => !!v || 'Description is required',
              ],
              Start: '',
              StartRules: [
                v => !!v || 'Start Date is required',
              ],
              End: '',
              EndRules: [
                v => !!v || 'End Date is required',
              ],
              select: null,
              
            checkbox: false,
          

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

            //calendar
            dateRangeText () {
              return this.dates.join(' ~ ')
            },

          },

                              


            methods: {
              async fetchInfo(){
                try{
                  const res = await axios.post('/fetchprofile',{
                  })
                   this.userinfo=res.data
                }catch (err){
                    console.log(err)
                }
              },
              async fetchInfo(){
                try{
                  const res = await axios.post('/fetchprofile',{
                  })
                   this.userinfo=res.data
                }catch (err){
                    console.log(err)
                }
              },
              async fetchrequest(){
                try{
                  const res = await axios.post('/fetchrequest1',{
                  })
                   this.requesttrainer=res.data
                   router.push('/course-request')
                }catch (err){
                    console.log(err)
                }
              },
              async fetchclient(){
                try{
                  const res = await axios.post('/fetchclient1',{
                  })
                   this.clienttrainer=res.data
                   router.push('/course-manage')
                }catch (err){
                    console.log(err)
                }
              },
              async updateschedule(){
                try{
                  const res = await axios.post('/addschedule',{
                  })
                   this.userinfo=res.data
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

                validate () {
                  if (this.$refs.form.validate()) {
                    this.snackbar = true
                  }
                },
                reset () {
                  this.$refs.form.reset()
                },
                resetValidation () {
                  this.$refs.form.resetValidation()
                },

                
            },
            created(){
              this.fetchInfo()
            }
            
            
        
    
})