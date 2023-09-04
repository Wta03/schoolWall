<style>
.body_first {
    margin-top: 10px;
    display: flex;
    box-shadow: 3px 3px 5px #babecc, -5px -5px 10px #fff;
    border-radius: 20px;
    flex-flow: column wrap;
}

.first_line {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: flex-start;
}

.head {
    border-radius: 50%;
    height: 65px;
    width: 65px;
    border: #babecc 1px solid;
    align-self: center;
}

.body {
    padding-left: 10px;
    text-align: left;
}

.name {
    font-size: 15px;
    font-weight: bolder;
    color: rgb(97, 96, 96);

}

.time {
    font-size: 10px;
    color: rgb(119, 118, 118);
}

.button {
    margin-left: 20px;
    align-self: center;
    padding: 8px;
    border-radius: 10px;
    box-shadow: 3px 3px 5px #babecc, -5px -5px 10px #fff;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: #818181;
}

.button:hover {
    box-shadow: 2px 2px 4px #babecc, -2px -2px 5px #fff;
}

.button:active {
    box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
}

.last_line {
    margin: 10px 70px;
    box-shadow: inset 3px 3px 5px #babecc, inset -5px -5px 10px #fff;
    border-radius: 20px;
    padding: 20px 10px;
    display: flex;
    flex-flow: row nowrap;
}

.image {
    height: 200px;
    box-shadow: 3px 3px 5px #babecc, -5px -5px 10px #fff;
    border-radius: 20px;
}

img {
    height: 100%;
    border-radius: 20px;
}

.js {
    flex: 1;
    color: #818181;
    text-align: left;
    box-shadow: 3px 3px 5px #babecc, -5px -5px 10px #fff;
    border-radius: 20px;
    padding: 20px 10px;
    margin-left: 20px;
    font-size: 20px;
}

.js span {
    text-shadow: 1px 1px 1px rgb(71, 71, 71), -1px -1px 1px #fff;
    color: #ebecf0dd;
}

.next_line {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: flex-end;
}

.next_line .button {
    margin: 20px 20px 10px 20px;
    padding: 10px 15px;
}

.pl {

    flex-flow: column;
    margin: 10px 60px;
}

.div_flex input[type="text"] {
    color: #757575;
    margin: 20px;
    padding: 25px;
    border-radius: 25px;
    width: 500px;
    height: 30px;
    font-style: normal;
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 200;
    border: #ebecf0dd;
    box-sizing: border-box;
    box-shadow: inset 3px 3px 5px #babecc, inset -5px -5px 10px #fff;
    background: #ebecf0dd;
    outline: 0;
    transition: all 0.1s linear 0s;
}

input[type="text"]:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}

.pl_firstline {
    display: flex;
    flex-flow: row nowrap;
}

.pl_firstline .button {
    margin: 20px;
    padding: 10px 20px;
    border-radius: 20px;
}

.pl_nextline {
    display: flex;
    flex-flow: column wrap;
    ;
}

.pl_next_first {
    display: flex;
    flex-flow: row nowrap;

}
</style>
<template>
    <div>
        <div class="body_first" v-for="(us, index) in dat_real" :key="index">
            <div class="first_line" style="position:relative;">
                <div class="head" style="cursor: pointer;" @click="grzy(us, index)">
                    <img v-bind:src="`${us.tx_imge}`" style="border-radius: 50%;height: 65px;width: 65px;">
                </div>
                <div class="body">
                    <p class="name">{{ us.name }}</p>
                    <p class="time">{{ us.time }}</p>
                </div>
                <div class="button">
                    <i class="el-icon-s-promotion" style="color: rgb(199, 53, 53);"></i>
                    私信
                </div>
                <div class="button">
                    <i class="el-icon-circle-plus-outline" style="color: rgb(199, 53, 53);"></i>
                    关注
                </div>
                <div style=" position: absolute; color:#ebecf0dd  ; right: 20px;top:20px;font-size: 30px; font-weight: 100; text-shadow: 1px 1px 1px rgb(71, 71, 71), -1px -1px 1px #fff;">
                    {{js[us.form_id - 1 ][0]}}
                </div>
            </div>
            <div class="last_line">
                <div class="image">
                    <img v-bind:src="`${us.img_src}`">
                </div>
                <div class="js">
                    <div>
                    {{js[us.form_id - 1 ][1]}}<span>{{ us.form1 }}</span>
                    </div>
                    <div>
                        {{js[us.form_id - 1 ][2]}} <span>{{ us.form2 }}</span>
                    </div>
                </div>
            </div>
            <div class="next_line">
                <div class="button" @click="tt(us, index)">
                    <i class="el-icon-s-comment" style="color: rgb(199, 53, 53);"></i>
                </div>
            </div>
            <div class="pl" style="display:none">
                <div class="pl_firstline">
                    <input type="text" name="thing" v-model="thing[index]">
                    <div class="button" @click="plsr(us, index)">评论</div>
                </div>
                <div class="pl_nextline">
                    <div class="pl_next_first" v-for="(us1, index1) in dat2" :key="index1">
                        <div class="head" style="width:40px;height:40px;cursor: pointer;" @click="grzy(us1, index1)">
                            <img v-bind:src="`${us1.tx_imge}`" style="border-radius: 50%;height: 40px;width: 40px;">
                        </div>
                        <div class="body">
                            <p class="name" style="font-size:13px;"><span style="color: brown;">{{ us1.name
                            }}:</span> {{ us1.text }}</p>
                            <p class="time" style="font-size:8px">{{ us1.time }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: '失物招领',
    data() {
        return {
            pas: [],
            name: '',
            tx_imge: '',
            user_name: this.$route.params.user_name,
            dat: [],
            dat_real:[],
            thing: [],
            form_id: 0,
            pl_all: [],
            dat1: [],
            dat2: [],
            dat3: [],
            dat_val: this.$route.params.val,
            time_all: this.$route.params.val[5],
            all_form_id:[],
            desc: this.$route.params.val[6],
            js:[['寻物','丢失物 : ','丢失物介绍 : '],['失物招领','物品名 : ','物品介绍 : '],['二手交易市场','二手物品名 : ','二手物品介绍 : '],['问题咨询','问题 : ','额外信息 : '],['交友','标题 : ','介绍信息 : ']],
        }
    },
    
    methods: {
        but_sx(us, index) {
            this.showStu_user_sx(us);
        },
        showStu_user_sx(us) {
            axios.get('http://localhost:3000/api/Stu/showStu_user_sx',).then((response) => {
                this.user_sxd = response.data;
                for (let a = 0; a < this.user_sxd.length; a++) {
                    this.user_user1.push(this.user_sxd[a].user1)
                    this.user_user2.push(this.user_sxd[a].user2)
                }
                if ((this.user_user1.indexOf(this.user_name) == this.user_user2.indexOf(us.user_name)) || (this.user_user2.indexOf(this.user_name) == this.user_user1.indexOf(us.user_name))){
                    this.$router.push({ name: 'wdxx_sx', params: { user_name: this.user_name, duser: us.user_name } });
                }else{
                    this.lz1(us);
                }
            })
        },
        lz1(us){
            axios.post('http://localhost:3000/api/Stu/addStu_user_sx', { user1: this.user_name, user2: us.user_name, name1: this.name, name2: us.name, tx_imge1: this.tx_imge, tx_imge2: us.tx_imge }, {}).then((response) => { console.log(response); });
            this.$router.push({ name: 'wdxx_sx', params: { user_name: this.user_name, duser: us.user_name } });
        },
        grzy(us, index) {
            this.$router.push({ name: 'trzy', params: { user_name: this.user_name, duser: us.user_name } });
        },
        showStu1() {
            if(this.desc=='desc'){
                axios.get('http://localhost:3000/api/Stu/showStu',).then((response) => {
                    this.dat = response.data;
                    for (let a = 0; a < this.dat.length; a++) {
                        var d = new Date(this.dat[a].time);
                        this.dat[a].time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
                    }
                    for (let a = 0; a < 5; a++) {
                        if (this.dat_val[a]) {
                            this.all_form_id.push(a + 1);
                        }
                    }
                    console.log(this.all_form_id)
                    for (let a = 0; a < this.dat.length; a++) {
                        if (this.all_form_id.includes(this.dat[a].form_id) && this.dat[a].time > this.time_all[0] && this.dat[a].time < this.time_all[1]) {
                            this.dat_real.push(this.dat[a])
                            console.log(this.dat[a].form_id)
                        }
                    }
                    if (this.dat_real.length === 0) {
                        this.open3()
                    }
                })
            }else{
                axios.get('http://localhost:3000/api/Stu/showStu_asc',).then((response) => {
                    this.dat = response.data;
                    for (let a = 0; a < this.dat.length; a++) {
                        var d = new Date(this.dat[a].time);
                        this.dat[a].time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
                    }
                    for (let a = 0; a < 5; a++) {
                        if (this.dat_val[a]) {
                            this.all_form_id.push(a + 1);
                        }
                    }
                    console.log(this.all_form_id)
                    for (let a = 0; a < this.dat.length; a++) {
                        if (this.all_form_id.includes(this.dat[a].form_id) && this.dat[a].time > this.time_all[0] && this.dat[a].time < this.time_all[1]) {
                            this.dat_real.push(this.dat[a])
                            console.log(this.dat[a].form_id)
                        }
                    }
                    if (this.dat_real.length === 0) {
                        this.open3()
                    }
                })
            }
        },
        showStu2() {
            axios.get('http://localhost:3000/api/Stu/showStu2',).then((response) => {
                this.dat1 = response.data;
                for (let a = 0; a < this.dat1.length; a++) {
                    var d = new Date(this.dat1[a].time);
                    this.dat1[a].time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
                }
            })
        },
        tobe(us, a) {
            this.showStu2();
            for (let b = 0; b < this.dat1.length; b++) {
                if (this.dat1[b].id === us.id) {
                    this.dat2.push(this.dat1[b]);
                    console.log(this.dat2.length)
                }
            }
            a.style.display = 'flex';
        },
        tt(us, index) {
            var a = document.getElementsByClassName('pl')[index];
            if (a.style.display === 'none') {
                var b = document.getElementsByClassName('pl');
                for (let c = 0; c < b.length; c++) {
                    if (c != index) {
                        b[c].style.display = "none";
                    }
                }
                this.dat2 = [];
                this.tobe(us, a);
            } else {
                a.style.display = 'none';
            }

        },
        getFormatDate() {
            var date = new Date();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentDate = date.getFullYear() + "-" + month + "-" + strDate + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            return currentDate;
        },
        open1() {
            this.$alert('评论成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'success',
                        message: `评论成功`
                    });
                }
            });
        },
        open2() {
            this.$alert('请输入评论', '警告', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `输入错误`
                    });
                }
            });
        },
        open3() {
            this.$alert('未筛选到相关信息', '警告', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `请重新筛选`
                    });
                }
            });
        },
        add(a, index) {
            axios.post('http://localhost:3000/api/Stu/addStu2', { user_name: this.user_name, time: this.getFormatDate(), text: this.thing[index], id: a.id, name: this.name, tx_imge: this.tx_imge, }, {}).then((response) => { console.log(response); });
            axios.post('http://localhost:3000/api/Stu/updateStu_rd', {rd:a.rd++,id: a.id,}, {}).then((response) => { console.log(response); });
        }, user_name_tx() {
            axios.get('http://localhost:3000/api/Stu/showStu_grzx',).then((response) => {
                this.pas = response.data;
                for (let a = 0; a < this.pas.length; a++) {
                    if (this.pas[a].username == this.$route.params.user_name) {
                        this.tx_imge = this.pas[a].circleUrl;
                        this.name = this.pas[a].name;
                        break;
                    }
                }
            })
        },
        plsr(a, index) {
            if (this.thing[index] == "") {
                this.open2()
            } else {
                this.add(a, index)
                this.open1()
            }
        }
    },
    watch: {

    },
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'background-color:#ebecf0dd')
    },
    mounted() {
        this.showStu1();
        this.showStu2();
        this.user_name_tx();
    },
}  
</script> 