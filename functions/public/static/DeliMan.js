const Request={template:`
<v-container> 
<div align="center"><img src="./pic/delivery-1.png" height="300"></div>
<div class="white--text" style="text-decoration: underline; font-size: 24px;" > คำขอส่งอาหารจากผู้ใช้</div>
<v-card color="black" outlined  max-width="1200">
    <v-card-text class="white--text subtitle-1">
        <v-row v-for="(order,i) in orderfdm" key="i">
            <v-col col="8" sm="2">
                <div class="text-center"> <v-avatar size="100" ><img src="./pic/user.png"></v-icon></v-avatar></div>
            </v-col>

            <v-col col="8" sm="3">
            ชื่อ : {{order.firstname}} {{order.lastname}}
            <br/>
            เวลา : {{order.time}}
            </v-col>

            <v-col col="8" sm="3">
            <v-card-actions>
                    <v-dialog v-model="info" width="600" >
                            <template v-slot:activator="{ on }">
                                <v-btn color="#FDA50B"  x-large class="mx-auto" outlined depressed v-on="on" >
                                    <span class="title font-weight-bold" >รายละเอียด</span>
                                </v-btn>
                            </template>
                            <v-card >
                                <v-card-title class="orange darken-1">รายละเอียดเมนูลูกค้า</v-card-title>
                                <v-card-text class="black--text">
                                        <v-simple-table>
                                            <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-center" style="font-size: 16px;">เมนูอาหาร</th>
                                                    <th class="text-center" style="font-size: 16px;">ราคา(บาท)</th>
                                                    <th class="text-center" style="font-size: 16px;">จำนวน</th>
                                                    <th class="text-center" style="font-size: 16px;">ราคารวม<br/>(บาท)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in order.food" :key="item.name">
                                                    <td>{{ item.name }}</td>
                                                    <td class="text-center">{{ item.cost }}</td>
                                                    <td class="text-center">{{ item.count }}</td>
                                                    <td class="text-center">{{ item.totalcost }}</td>
                                                </tr>
                                            </tbody>
                                            </template>
                                        </v-simple-table>
                                        <v-divider></v-divider>
                                        <v-row>
                                        </v-row>
                                        <v-row>
                                                <v-col cols="12" sm="4" class="text-left" style="font-size: 16px;">
                                                        สรุปยอดการสั่งซื้อ
                                                        </v-col>
                                                <v-col cols="12" sm="3" class="text-left" style="font-size: 16px;">
                                                        จำนวน {{order.totalcount}}
                                                </v-col>
                                                <v-col cols="12" sm="3" class="text-right" style="font-size: 16px;">
                                                    รวมเป็นเงิน
                                                </v-col>
                                                <v-col cols="12" sm="2" class="text-right">
                                                    {{order.totalcost}} บาท
                                                    </v-col>
                                        </v-row>
                                        <v-divider></v-divider>
                                        <v-row class="orange darken-1" > 
                                                <v-col cols="12" sm="8" class="text-left" style="font-size: 16px;">
                                                        <v-icon color="black" medium>room</v-icon> 128/32 หมู่ 20 ซอย 36 ถ.หมูกรอบ ต.หมูแดง อ.เมือง จ.เพชรบุรี รหัสไปรษณีย์ 76000
                                                </v-col>
                                        </v-row>
                                </v-card-text>
                            </v-card>
                        </v-dialog>

                    <v-dialog v-model="choose" width="500" >
                        <template v-slot:activator="{ on }">
                            <v-btn @click="clientid=order.username" color="#FDA50B"  x-large class="mx-auto" outlined depressed v-on="on" >
                                <span class="title font-weight-bold" >รับ</span>
                            </v-btn>
                        </template>
                        <v-card >
                            <v-card-text class="black--text pt-5 text-center">
                                <span style="font-size: 24px;">คุณยืนยันที่จะรับคำขอของผู้ใช้รายนี้ <br/> ใช่หรือไม่?</span>
                                <div><v-icon size=120 color="#FDA50B">warning</v-icon></div>
                                <v-card-actions>
                                        <v-btn color="black" class="font-weight-bold mx-auto" x-large outlined @click="choose=false" >
                                            ไม่ยืนยัน
                                        </v-btn>
                                        <v-btn @click="choose=false; addclient(clientid)" color="black" class="font-weight-bold mx-auto" x-large outlined >
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
  props:['orderfdm','addclient','time'],
  data (){
    return {
        user:false,
        offset:true,
        closeOnContentClick:false,
        info:false,
        choose:false,
        clientid:'',
        foods: [
            {
              name: 'เกาเหลาเส้นใหญ่',
              cost: 950,
              count: 1,
              totalcost: 950,
            },
            {
                name: 'เกาเหลาเส้นบุก',
                cost: 950,
                count: 1,
                totalcost: 950,
              },
            
          ],
        
    }
},}

const Reqmanage={template:`
<v-container> 
<div align="center"><img src="./pic/delivery-2.png" height="300"></div>
<div class="white--text" style="text-decoration: underline; font-size: 24px;" > จัดการคำขอส่งอาหารจากผู้ใช้</div>
<v-card color="black" outlined  max-width="1200">
    <v-card-text class="white--text subtitle-1">
    <v-row v-for="(order,j) in clientfdm" key="j">
    <v-col col="8" sm="2">
        <div class="text-center"> <v-avatar size="100" ><img src="./pic/user.png"></v-icon></v-avatar></div>
    </v-col>

    <v-col col="8" sm="3">
    ชื่อ : {{order.firstname}} {{order.lastname}}
    <br/>
    เวลา : {{order.time}}
    </v-col>

    <v-col col="8" sm="3">
    <v-card-actions>
            <v-dialog v-model="info" width="600" >
                    <template v-slot:activator="{ on }">
                        <v-btn color="#FDA50B"  x-large class="mx-auto" outlined depressed v-on="on" >
                            <span class="title font-weight-bold" >รายละเอียด</span>
                        </v-btn>
                    </template>
                    <v-card >
                        <v-card-title class="orange darken-1">รายละเอียดเมนูลูกค้า</v-card-title>
                        <v-card-text class="black--text">
                                <v-simple-table>
                                    <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-center" style="font-size: 16px;">เมนูอาหาร</th>
                                            <th class="text-center" style="font-size: 16px;">ราคา(บาท)</th>
                                            <th class="text-center" style="font-size: 16px;">จำนวน</th>
                                            <th class="text-center" style="font-size: 16px;">ราคารวม<br/>(บาท)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in order.food" :key="item.name">
                                            <td>{{ item.name }}</td>
                                            <td class="text-center">{{ item.cost }}</td>
                                            <td class="text-center">{{ item.count }}</td>
                                            <td class="text-center">{{ item.totalcost }}</td>
                                        </tr>
                                    </tbody>
                                    </template>
                                </v-simple-table>
                                <v-divider></v-divider>
                                <v-row>
                                </v-row>
                                <v-row>
                                        <v-col cols="12" sm="4" class="text-left" style="font-size: 16px;">
                                                สรุปยอดการสั่งซื้อ
                                                </v-col>
                                        <v-col cols="12" sm="3" class="text-left" style="font-size: 16px;">
                                                จำนวน {{order.totalcount}}
                                        </v-col>
                                        <v-col cols="12" sm="3" class="text-right" style="font-size: 16px;">
                                            รวมเป็นเงิน
                                        </v-col>
                                        <v-col cols="12" sm="2" class="text-right">
                                            {{order.totalcost}} บาท
                                            </v-col>
                                </v-row>
                                <v-divider></v-divider>
                                <v-row class="orange darken-1" > 
                                        <v-col cols="12" sm="8" class="text-left" style="font-size: 16px;">
                                                <v-icon color="black" medium>room</v-icon> 128/32 หมู่ 20 ซอย 36 ถ.หมูกรอบ ต.หมูแดง อ.เมือง จ.เพชรบุรี รหัสไปรษณีย์ 76000
                                        </v-col>
                                </v-row>
                        </v-card-text>
                    </v-card>
                </v-dialog>

            <v-dialog v-model="choose" width="500" >
                <template v-slot:activator="{ on }">
                    <v-btn @click="clientid=order.username" color="#FDA50B"  x-large class="mx-auto" outlined depressed v-on="on" >
                        <span class="title font-weight-bold" >เสร็จสิ้น</span>
                    </v-btn>
                </template>
                <v-card >
                    <v-card-text class="black--text pt-5 text-center">
                        <span style="font-size: 24px;">คุณยืนยันที่จะลบรายการของผู้ใช้นี้<br/> ใช่หรือไม่?</span>
                        <div><v-icon size=120 color="#FDA50B">warning</v-icon></div>
                        <v-card-actions>
                                <v-btn color="black" class="font-weight-bold mx-auto" x-large outlined @click="choose=false" >
                                    ไม่ยืนยัน
                                </v-btn>
                                <v-btn @click="choose=false; removeclient(clientid)" color="black" class="font-weight-bold mx-auto" x-large outlined >
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
props:['clientfdm','removeclient'],
data (){
return {
user:false,
offset:true,
closeOnContentClick:false,
info:false,
choose:false,
clientid:'',
foods: [
    {
      name: 'เกาเหลาเส้นใหญ่',
      cost: 950,
      count: 1,
      totalcost: 950,
    },
    {
        name: 'เกาเหลาเส้นบุก',
        cost: 950,
        count: 1,
        totalcost: 950,
      },
    
  ],

}
},}

var EditProfile={template:'<div style="background-color: #FDA50B;">\
<v-container>\
    <div style="font-size: 28px;">\
        <v-icon large color="black">edit</v-icon>&nbsp;\
        <b>EDIT PROFILE</b>\
    </div>\
    <v-card width=500 class="mx-auto" color="white" outlined>\
            <v-card-text>\
            <div align="center" full-width><v-avatar size="200" ><img src="./pic/user.png"></v-icon></v-avatar>\
                <div style="width: 250px;">\
                    <v-file-input\
                    accept="image/png, image/jpeg, image/bmp"\
                    prepend-icon="mdi-camera"\
                    placeholder="Upload Your Picture" @click.prevent="not=true"></v-file-input>\
                </div>\
            </div>\
            <v-form action="/updateprofile" method="post" class="black--text" >\
            <b style="font-size:larger;" >Username</b>\
            <v-text-field outlined name="username" :disabled="true" v-model=" userinfo.username"></v-text-field>\
                <v-divider></v-divider>\
                <v-row>\
                    <v-col cols="12" sm="6">\
                        <b style="font-size:larger;" >Name</b>\
                        <v-text-field outlined name="firstname" v-model=" userinfo.firstname"></v-text-field>\
                    </v-col>\
                    <v-col cols="12" sm="6">\
                        <b style="font-size:larger;">Surename</b>\
                        <v-text-field outlined name="lastname" v-model=" userinfo.lastname"></v-text-field>\
                    </v-col>\
                </v-row>\
                    <b style="font-size:larger;">Email</b>\
                    <v-text-field outlined name="email" v-model=" userinfo.email"></v-text-field>\
                <v-row>\
                    <v-col cols="12" sm="6">\
                        <b style="font-size:larger;">Bithday</b>\
                        <v-text-field outlined name="bod" v-model=" userinfo.bod"></v-text-field>\
                    </v-col>\
                    <v-col cols="12" sm="6">\
                        <b style="font-size:larger;">Phone No.</b>\
                        <v-text-field outlined name="tel" v-model=" userinfo.tel"></v-text-field>\
                    </v-col>\
                </v-row>\
                    <b style="font-size:larger;">Adress</b>\
                    <v-text-field outlined name="address" v-model=" userinfo.address"></v-text-field>\
                <v-row>\
                    <v-col cols="12" sm="4">\
                        <b style="font-size:larger;">Blood Type</b>\
                        <v-text-field outlined name="blood" v-model=" userinfo.blood"></v-text-field>\
                    </v-col>\
                    <v-col cols="12" sm="4">\
                        <b style="font-size:larger;">Weight</b>\
                        <v-text-field outlined name="weight" v-model=" userinfo.weight"></v-text-field>\
                    </v-col>\
                    <v-col cols="12" sm="4">\
                        <b style="font-size:larger;">Height</b>\
                        <v-text-field outlined name="height" v-model=" userinfo.height"></v-text-field>\
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
props:['userinfo','not'],
}

const router=new VueRouter ({
    routes : [
        {path:'/request', component:Request},
        {path:'/reqmanage', component:Reqmanage},
        {path:'/editprofile',component:EditProfile},
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
            offset:true,
            closeOnContentClick:false,
            info:false,
            choose:false,
            userinfo:[],
            orderfdm:[],
            clientfdm:[],
            clientinfo:[],
            time:'',
            foods: [
                {
                  name: 'เกาเหลาเส้นใหญ่',
                  cost: 950,
                  count: 1,
                  totalcost: 950,
                },
                {
                    name: 'เกาเหลาเส้นบุก',
                    cost: 950,
                    count: 1,
                    totalcost: 950,
                  },
                
              ],
            
        }
    },
    methods:{
        async fetchprofile(){
        try{
          const res = await axios.post('/fetchprofile',{
          })
           this.userinfo=res.data
           router.push("/editprofile")
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
          const res = await axios.post('/fetchrequest2',{
          })
           this.orderfdm=res.data
           router.push('/request')
        }catch (err){
            console.log(err)
        }
      },
      async fetchclient(){
        try{
          const res = await axios.post('/fetchclient2',{
          })
           this.clientfdm=res.data
           router.push('/reqmanage')
        }catch (err){
            console.log(err)
        }
      },
      async addclient(id){
          alert(id)
        try{
          const res = await axios.post('/addclient2',{
              username:id
          })
           this.fetchrequest()
        }catch (err){
            console.log(err)
        }
      },
      async removeclient(id){
      try{
        const res = await axios.post('/doneclient',{
            username:id
        })
         this.fetchclient()
      }catch (err){
          console.log(err)
      }
    },

    },
    created() {
        this.fetchInfo()
    }
      
})