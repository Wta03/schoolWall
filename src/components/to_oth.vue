<style scoped>
.sr{
    position: absolute;
    width: 100%;
    height: 100px;
    border: 4px #babecc solid;
    bottom:0px;
    margin-left: -14px;
    margin-bottom: -4px;
    border-radius: 20px;
}
.button_hall {
    align-self: center;
    padding: 8px;
    border-radius: 10px;
    box-shadow: 3px 3px 5px #babecc, -5px -5px 10px #fff;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: #818181;
}
.thing_but {
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

.thing_but:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}
.button_hall:hover {
    box-shadow: 2px 2px 4px #babecc, -2px -2px 5px #fff;
}

.button_hall:active {
    box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
}
.pl_next_first {
    display: flex;
    flex-flow: row nowrap;
}
.name {
    font-size: 15px;
    font-weight: bolder;
    color: rgb(97, 96, 96);

}

.time {
    font-size: 10px;
    color: rgb(119, 118, 118);
    border-bottom: 2px solid #818181;
    border-top: 2px solid #818181;
}
.body {
    padding-left: 10px;
    text-align: left;
}
</style>
<template>
    <div class="all" >
    <div style="display:flex;flex-flow: column nowrap;width:700px;margin-bottom: 100px;overflow-y: scroll;">
        <div class="pl_next_first" v-for="(us1, index1) in sx_pl1" :key="index1" style="width:100%">
            <div class="head" style="width:40px;height:40px;cursor: pointer;" @click="grzy(us1, index1)">
                <img v-bind:src="`${us1.tx_imge}`" style="border-radius: 50%;height: 40px;width: 40px;">
            </div>
            <div class="body">
                <p class="name" style="font-size:13px;"><span style="color: brown;">{{ us1.name}}:</span> {{ us1.text }}</p>
                <p class="time" style="font-size:8px">{{ us1.time }}</p>
            </div>
        </div>
    </div>
    <div class="sr">
        <div style="margin:10px;display: flex;flex-flow: row nowrap;">
            <input type="text" name="thing" v-model="thing" class="thing_but">
            <div class="button_hall" @click="fs()" name="ss" style="position: relative; left:100px;">发送</div>
        </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            pas:[],
            pas1:[],
            thing:'',
            sx_pl:[],
            sx_pl1: [],
            user_name: this.$route.params.user_name,
            id: this.$route.params.id,
            usd: {
                circleUrl: '',
                name: '',
            },
        };
    },
    methods: {
        showStu1() {
            axios.get('http://localhost:3000/api/Stu/showStu_grzx',).then((response) => {
                this.pas = response.data;
                for (let a = 0; a < this.pas.length; a++) {
                    if (this.pas[a].username == this.$route.params.user_name) {
                        this.usd.circleUrl = this.pas[a].circleUrl;
                        this.usd.name = this.pas[a].name;
                        break;
                    }
                }
            })
        },
        showStu2() {
            axios.get('http://localhost:3000/api/Stu/showStu_sx_pl',).then((response) => {
                this.sx_pl = response.data;
                for (let a = 0; a < this.sx_pl.length; a++) {
                    var d = new Date(this.sx_pl[a].time);
                    this.sx_pl[a].time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
                }
                for (let a = 0; a < this.sx_pl.length; a++) {
                    if (this.sx_pl[a].id == this.id) {
                        this.sx_pl1.push(this.sx_pl[a])
                    }
                }
                console.log(sx_pl.length)
            })
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
        add(){
            axios.post('http://localhost:3000/api/Stu/addStu_sx_pl', { user_name: this.user_name, id: this.id, text: this.thing, time: this.getFormatDate(),name:this.usd.name,tx_imge:this.usd.circleUrl }, {}).then((response) => { console.log(response); });
        },
        open1() {
            this.$alert('发送成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'success',
                        message: `发送成功`
                    });
                }
            });
        },
        open2() {
            this.$alert('未输入', '警告', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `输入错误`
                    });
                }
            });
        },
        fs(){
            if (this.thing == "") {
                this.open2()
            } else {
                this.add()
                alert('发送成功')
                this.$router.go(0)
            }
        }
    },
    mounted() {
        this.showStu1();
        this.showStu2();
    },
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'background-color:#ebecf0dd')
    },
}
</script>