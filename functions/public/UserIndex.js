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

const Subscribe={template:'<div class="white">Subscribe</div>'}

const router=new VueRouter ({
    routes : [
        {path:'/editprofile', component:EditProfile},
        {path:'/subscribe', component:Subscribe},
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
            
        }
    },
})


