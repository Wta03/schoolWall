<style scoped>
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
.div_flex {
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    align-items: center;
}

p {
    font-size: 30px;
    color: #babecc;
    font-weight: bolder;
}

.div_flex input[type="text"],
.div_flex textarea {
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

.div_flex textarea {
    border-radius: 35px;
    width: 500px;
    height: 300px;
    resize: none;
}

.div_flex input[type="text"]:focus,
.div_flex textarea:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
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
.div_file {
    width: 500px;
    display: flex;
    flex-flow: row nowrap;
    align-content: center;
    align-items: center;
    justify-items: center;
    justify-content: center;
}

.div_file input[type="text"] {
    width: 400px;
    border-radius: 0;
}

.div_file input[type="file"] {
    display: none;
}

.div_file button {
    color: #757575;
    width: 100px;
    height: 40px;
    box-shadow: 3px 3px 5px #babecc, -3px -3px 5px #fff;
    border-radius: 5px;
    border: 0px;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    font-size: 18px;
    font-weight: 200;
}

.div_file button:hover {
    box-shadow: 2px 2px 4px #babecc, -2px -2px 5px #fff;
}

.div_file button:active {
    box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
}

.div_radio {
    width: 500px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}

.div_radio input[type="radio"] {
    display: none;
}

.div_radio label {
    color: #757575;
    width: 100px;
    margin: 20px;
    padding: 10px;
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 200;
    transition: all 0.2s ease 0s;
}

.div_radio label:hover {
    box-shadow: inset 3px 3px 5px #babecc, inset -3px -3px 5px #fff;
}

.div_radio input:checked+label {
    color: rgb(201, 69, 69);
    font-size: 19px;
    box-shadow: inset 3px 3px 5px #babecc, inset -3px -3px 5px #fff;
}

.button_tj,
.button_sx {
    color: rgb(212, 55, 55);
    width: 100px;
    margin: 20px;
    padding: 10px;
    box-shadow: 3px 3px 5px #babecc, -3px -3px 5px #fff;
    border: 0px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 200;
    transition: all 0.2s ease 0s;
}

.div_background {
    position: absolute;
    height: 100px;
    line-height: 100px;
    font-size: 100px;
    letter-spacing: 100px;
    text-shadow: 1px 1px 1px #fff, -1px -1px 1px #000;
    color: #ebecf0dd;
    z-index: -1;
    top: calc(40% - 50px);
    right: 0;
    width: 1000px;
    text-align: center;
}

.button_tp {
    width: 100px;
    margin: 20px;
    padding: 10px;
    box-shadow: 3px 3px 5px #babecc, -3px -3px 5px #fff;
    border: 0px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 200;
    transition: all 0.2s ease 0s;
    background-color: #ebecf0dd;
    color: #757575;
}

.div_button {
    width: 500px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}

.el-upload__tip {
    color: rgb(229, 62, 62);
}

.button_tj:hover,
.button_sx:hover,
.button_tp:hover {
    box-shadow: 2px 2px 4px #babecc, -2px -2px 5px #fff;
}

.button_tj:active,
.button_sx:active,
.button_tp:active {
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

.pl_firstline input[type="text"] {
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

.pl_firstline input[type="text"]:focus {
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
.xg_bd{
    z-index: 2;
        position: absolute;
        width: 30vw;
        height: 70vh;
        background-color: aqua;
        top:-20%;
        left:20% ;
        border-radius: 20px;
        padding:20px;
        background-color:#ebecf0dd;
        box-shadow: inset 3px 3px 5px #babecc, inset -5px -5px 10px #fff;
}
</style>
<template>
    <div>
        
        <div style="font-size:16px">
            <b>我发表的墙</b>
        </div>
        <br>
        <div class="body_first" v-for="(us, index) in dat_bd" :key="index">
            <div class="first_line" style="position:relative;">
                <div class="head">
                    <img v-bind:src="`${us.tx_imge}`" style="border-radius: 50%;height: 65px;width: 65px;">
                </div>
                <div class="body">
                    <p class="name">{{ us.name }}</p>
                    <p class="time">{{ us.time }}</p>
                </div>
                <div class="button" @click="xg(us, index)">
                    <i class="el-icon-edit-outline" style="color: rgb(199, 53, 53);" ></i>
                    修改
                </div>
                <div class="xg_bd" style="display:none">
                    <div class="div_flex">
                        {{ js[us.form_id - 1][1] }}<input type="text" name="thing" v-model="thing">
                        {{ js[us.form_id - 1][2] }}<textarea name="something" id="" cols="30" rows="10" v-model="something"></textarea>
                        <div class="div_radio">
                            <input type="radio" name="who" v-model="who" value="匿名" id="niming">
                            <label for="niming">匿名</label>
                            <input type="radio" name="who" v-model="who" value="不匿名" id="no_niming" checked>
                            <label for="no_niming">不匿名</label>
                        </div>
                        <div>
                            图片无法修改
                        </div>
                        <div class="div_button">
                            <button @click="tj(us, index)" class="button_tj">修改</button>
                        </div>
                    </div>
                </div>
                <div class="button">
                    <i class="el-icon-circle-close" style="color: rgb(199, 53, 53);" @click="sc_dd(us, index)"></i>
                    删除
                </div>
                <div
                    style=" position: absolute; color:#ebecf0dd  ; right: 20px;top:20px;font-size: 30px; font-weight: 100; text-shadow: 1px 1px 1px rgb(71, 71, 71), -1px -1px 1px #fff;">
                    {{ us.name +' 发表的 '+js[us.form_id - 1][0] }}
                </div>
            </div>
            <div class="last_line">
                <div class="image">
                    <img v-bind:src="`${us.img_src}`">
                </div>
                <div class="js">
                    <div>
                        {{ js[us.form_id - 1][1] }}<span>{{ us.form1 }}</span>
                    </div>
                    <div>
                        {{ js[us.form_id - 1][2] }} <span>{{ us.form2 }}</span>
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
                        <div class="head" style="width:40px;height:40px">
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
    name: '',
    data() {
        return {
            pas: [],
            name: '',
            tx_imge: '',
            thing: '丢失物',
            something: '丢失物介绍',
            fileName: "",
            who: '',
            drawer: false,
            direction: 'rtl',
            user_name: this.$route.params.user_name,
            user_tx: ['http://localhost:3000/public/tx/th1.png', 'http://localhost:3000/public/tx/th2.png', 'http://localhost:3000/public/tx/th3.png', 'http://localhost:3000/public/tx/th4.png', 'http://localhost:3000/public/tx/th5.png'],
            dat: [],
            dat_bd:[],
            thing: [],
            form_id: 0,
            pl_all: [],
            dat1: [],
            dat2: [],
            dat3: [],
            js: [['寻物', '丢失物 : ', '丢失物介绍 : '], ['失物招领', '物品名 : ', '物品介绍 : '], ['二手交易市场', '二手物品名 : ', '二手物品介绍 : '], ['问题咨询', '问题 : ', '额外信息 : '], ['交友', '标题 : ', '介绍信息 : ']],
        }
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        showStu1() {
            axios.get('http://localhost:3000/api/Stu/showStu',).then((response) => {
                this.dat = response.data;
                for (let a = 0; a < this.dat.length; a++) {
                    if (this.dat[a].user_name == this.user_name) {
                        this.dat_bd.push(this.dat[a]);
                        var d = new Date(this.dat[a].time);
                        this.dat[a].time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
                    }
                }
                
            })
        },
        sc_dd(us,a){
            axios.post('http://localhost:3000/api/Stu/delStu2', { username: us.id }).then((response) => {
                console.log(response);
            })
            this.$router.go(0)
            alert('删除成功')
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
        xg(us,index){
            this.thing=us.form1;
            this.something=us.form2;
            this.who=us.have_name;
            var a = document.getElementsByClassName('xg_bd')[index];
            if (a.style.display === 'none') {
                a.style.display = 'block'
                var b = document.getElementsByClassName('xg_bd');
                for (let c = 0; c < b.length; c++) {
                    if (c != index) {
                        b[c].style.display = "none";
                    }
                }
            } else {
                a.style.display = 'none';
            }
        },
        tj(us, index){
            var a = document.getElementsByClassName('xg_bd')[index];
            axios.post('http://localhost:3000/api/Stu/updateStu4', { form1:this.thing,form2:this.something,have_name: this.who,id:us.id}).then((response) => {
                console.log(response);
            })
            a.style.display = 'none'
            this.$router.go(0)
            alert('修改成功')
            
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
        user_name_tx() {
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
        add(a, index) {
            axios.post('http://localhost:3000/api/Stu/addStu2', { user_name: this.user_name, time: this.getFormatDate(), text: this.thing[index], id: a.id, name: this.name, tx_imge: this.tx_imge, }, {}).then((response) => { console.log(response); });
            axios.post('http://localhost:3000/api/Stu/updateStu_rd', { rd: a.rd++, id: a.id, }, {}).then((response) => { console.log(response); });
        },
        plsr(a, index) {
            if (this.thing[index] == "") {
                this.open2()
            } else {
                this.add(a, index)
                this.open1()
            }
        },
    },
    watch: {

    },
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'background-color:#ebecf0dd')
    },
    mounted() {
        this.user_name_tx();
        this.showStu1();
        this.showStu2();
        
    },
}  
</script> 