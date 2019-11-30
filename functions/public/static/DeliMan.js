const Request={template:`
<v-container> 
<div align="center"><img src="./pic/delivery-1.png" height="300"></div>
<div class="white--text" style="text-decoration: underline; font-size: 24px;" > คำขอส่งอาหารจากผู้ใช้</div>
<v-card color="black" outlined  max-width="1200">
    <v-card-text class="white--text subtitle-1">
        <v-row>
            <v-col col="8" sm="2">
                <div class="text-center"> <v-avatar size = 100><img src="./pic/u2.jpg" height="150"></v-avatar></div>
            </v-col>

            <v-col col="8" sm="3">
            ชื่อ : นายสิงหา กันยายน
            <br/>
            เวลา : 14:52
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
                                                <tr v-for="item in foods" :key="item.name">
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
                                            <v-col cols="12" sm="10" class="text-right" style="font-size: 16px;">
                                                ค่าส่ง
                                            </v-col>
                                            <v-col cols="12" sm="2" class="text-right" style="font-size: 16px;">
                                                ...บาท
                                                </v-col>
                                        </v-row>
                                        <v-row>
                                                <v-col cols="12" sm="4" class="text-left" style="font-size: 16px;">
                                                        สรุปยอดการสั่งซื้อ
                                                        </v-col>
                                                <v-col cols="12" sm="3" class="text-left" style="font-size: 16px;">
                                                        จำนวน ... 
                                                </v-col>
                                                <v-col cols="12" sm="3" class="text-right" style="font-size: 16px;">
                                                    รวมเป็นเงิน
                                                </v-col>
                                                <v-col cols="12" sm="2" class="text-right">
                                                    ...บาท
                                                    </v-col>
                                        </v-row>
                                        <v-divider></v-divider>
                                        <v-row class="orange darken-1" > 
                                                <v-col cols="12" sm="4" class="text-left" style="font-size: 16px;">
                                                        สถานะ : ชำระเงินยัง?
                                                </v-col>
                                                <v-col cols="12" sm="8" class="text-left" style="font-size: 16px;">
                                                        <v-icon color="black" medium>room</v-icon> 128/32 หมู่ 20 ซอย 36 ถ.หมูกรอบ ต.หมูแดง อ.เมือง จ.เพชรบุรี รหัสไปรษณีย์ 76000
                                                </v-col>
                                        </v-row>
                                </v-card-text>
                            </v-card>
                        </v-dialog>

                    <v-dialog v-model="choose" width="500" >
                        <template v-slot:activator="{ on }">
                            <v-btn color="#FDA50B"  x-large class="mx-auto" outlined depressed v-on="on" >
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
        info:false,
        choose:false,
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
        <v-row>
            <v-col col="8" sm="2">
                <div class="text-center"> <v-avatar size = 100><img src="./pic/u2.jpg" height="150"></v-avatar></div>
            </v-col>

            <v-col col="8" sm="3">
            ชื่อ : นายสิงหา กันยายน
            <br/>
            เวลา : 14:52
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
                                        <tr v-for="item in foods" :key="item.name">
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
                                    <v-col cols="12" sm="10" class="text-right" style="font-size: 16px;">
                                        ค่าส่ง
                                    </v-col>
                                    <v-col cols="12" sm="2" class="text-right" style="font-size: 16px;">
                                        ...บาท
                                        </v-col>
                                </v-row>
                                <v-row>
                                        <v-col cols="12" sm="4" class="text-left" style="font-size: 16px;">
                                                สรุปยอดการสั่งซื้อ
                                                </v-col>
                                        <v-col cols="12" sm="3" class="text-left" style="font-size: 16px;">
                                                จำนวน ... 
                                        </v-col>
                                        <v-col cols="12" sm="3" class="text-right" style="font-size: 16px;">
                                            รวมเป็นเงิน
                                        </v-col>
                                        <v-col cols="12" sm="2" class="text-right">
                                            ...บาท
                                            </v-col>
                                </v-row>
                                <v-divider></v-divider>
                                <v-row class="orange darken-1" > 
                                        <v-col cols="12" sm="4" class="text-left" style="font-size: 16px;">
                                                สถานะ : ชำระเงินยัง?
                                        </v-col>
                                        <v-col cols="12" sm="8" class="text-left" style="font-size: 16px;">
                                                <v-icon color="black" medium>room</v-icon> 128/32 หมู่ 20 ซอย 36 ถ.หมูกรอบ ต.หมูแดง อ.เมือง จ.เพชรบุรี รหัสไปรษณีย์ 76000
                                        </v-col>
                                </v-row>
                        </v-card-text>
                    </v-card>
                </v-dialog>
                <v-btn color="#FDA50B"  x-large class="mx-auto" outlined depressed >
                        <span class="title font-weight-bold" >เสร็จสิ้น</span>
                    </v-btn>
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
        info:false,
        choose:false,
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

const router=new VueRouter ({
    routes : [
        {path:'/request', component:Request},
        {path:'/reqmanage', component:Reqmanage},
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
})