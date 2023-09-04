<style scoped>
.div_flex{
        display: flex;
        flex-flow: row nowrap;
        width: 80%;
        justify-content:center ;
        margin-left:10%;
    }
    .hall_body{
        padding: 20px;
        flex: 2;
        box-shadow: inset 3px 3px 5px #babecc, inset -5px -5px 10px #fff;
        border-radius: 20px;
        min-height: 600px;
    }
    .hall_nav,.hall_aside{
        flex:1;
    }
    .hall_top{
        position: relative;
        left: -150px;
        width:50%;
        margin-top:-50px;
        min-height: 200px;
        border-radius: 30px;
        box-shadow: inset 3px 3px 5px #babecc, inset -5px -5px 10px #fff;
        transition:all 0.3s;
        flex-flow: column nowrap;
        align-items: center;
        margin-bottom: 20px;
    }
    .hall_flex{
        display: flex;
        flex-flow: column wrap;
        align-items: center;
    }
    .button_hall {
    align-self: center;
    padding: 8px;
    border-radius: 10px;
    box-shadow: 3px 3px 5px #babecc, -5px -5px 10px #fff;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: #818181;
    width: 60px;
}
.out_nav{
    align-items: center;
    justify-content:space-around;
    padding: 10px;
    width: 200px;
    display: flex;
    flex-flow:row wrap;
    position:fixed;
    top: 100px;
    right: 100px;
    border-radius: 30px;
    box-shadow: inset 3px 3px 5px #babecc, inset -5px -5px 10px #fff;
}

.button_hall:hover {
    box-shadow: 2px 2px 4px #babecc, -2px -2px 5px #fff;
}

.button_hall:active {
    box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
}
.hall_top_lx{
    display: flex;
    flex-flow: row nowrap;
    justify-content:flex-start;
    border-radius: 10px;   
    box-shadow:inset  3px 3px 5px #babecc,inset -5px -5px 10px #fff;
    margin: 10px;
    
    
}
.hall_top_lx .div1{
    transition: all 0.3s ease 0s; 
    box-shadow: 3px 3px 5px #babecc, -5px -5px 10px #fff;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 200;
}
.hall_top_lx div{
    font-size: 20px;
    text-decoration: none;
    margin: 20px;
    padding: 10px;
} 
.div1:hover {
    box-shadow: 2px 2px 4px #babecc, -2px -2px 5px #fff;
}
.div1:active {
    box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
}
.time_hall{
    box-shadow:3px 3px 5px #babecc, -5px -5px 10px #fff;
    border-radius: 20px;
    color:#818181
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
</style>
<template>
<div class="hall_flex">

    <div class="hall_top" style="display:none;">
       <div style="border-radius: 20px;box-shadow: 3px 3px 5px #babecc, -5px -5px 10px #fff;margin: 20px;padding: 15x;">
        <div class="hall_top_lx">
            <div style="color: rgb(199, 53, 53);">事务类型:</div>
            <div class="div1" @click="click(0)" style="color:#818181;">寻物</div>
            <div class="div1" @click="click(1)" style="color:#818181;">失物招领</div>
            <div class="div1" @click="click(2)" style="color:#818181;">二手交易市场</div>
            <div class="div1" @click="click(3)" style="color:#818181">问题咨询</div>
            <div class="div1" @click="click(4)" style="color:#818181">交友</div>
        </div>
        <div class="hall_top_lx">
            <div style="color: rgb(199, 53, 53);">发布时间:</div>
            <div style="padding:0px;margin: 0px;">
                <el-date-picker v-model="value" type="datetimerange" :picker-options="pickerOptions" range-separator="至"
                    start-placeholder="开始日期" end-placeholder="结束日期"  class="time_hall">
                </el-date-picker>
            </div>
            <div class="div1" @click="click1(5)" style="color:#818181;font-size: 16px;text-shadow:0px;font-weight:100;padding:10px 3px;">倒序</div>
            <div class="div1" @click="click1(6)" style="color:#818181;font-size: 16px;text-shadow:0px;font-weight:100;padding:10px 3px;">正序</div>
        </div>
        <div style="margin:10px;display: flex;flex-flow: row nowrap;">
            <div class="button_hall" @click="sx1()" style="position: relative; left:calc(100% - 200px);">筛选</div>
        </div>
       </div>
    </div>
    <div class="hall_top" style="display:none;">
        <div style="border-radius: 20px;box-shadow: 3px 3px 5px #babecc, -5px -5px 10px #fff;margin: 20px;padding: 15x;">
            <div class="hall_top_lx">
                <div style="color: rgb(199, 53, 53);">事务类型:</div>
                <div class="div1" @click="click_ss(7)" style="color:#818181;">寻物</div>
                <div class="div1" @click="click_ss(8)" style="color:#818181;">失物招领</div>
                <div class="div1" @click="click_ss(9)" style="color:#818181;">二手交易市场</div>
                <div class="div1" @click="click_ss(10)" style="color:#818181">问题咨询</div>
                <div class="div1" @click="click_ss(11)" style="color:#818181">交友</div>
            </div>
            <div class="hall_top_lx">
                <div style="color: rgb(199, 53, 53);">发布时间:</div>
                <div style="padding:0px;margin: 0px;">
                    <el-date-picker v-model="value_ss" type="datetimerange" :picker-options="pickerOptions" range-separator="至"
                        start-placeholder="开始日期" end-placeholder="结束日期" class="time_hall">
                    </el-date-picker>
                </div>
                <div class="div1" @click="click1_ss(12)"
                    style="color:#818181;font-size: 16px;text-shadow:0px;font-weight:100;padding:10px 3px;">倒序</div>
                <div class="div1" @click="click1_ss(13)"
                    style="color:#818181;font-size: 16px;text-shadow:0px;font-weight:100;padding:10px 3px;">正序</div>
            </div>
            <div style="margin:10px;display: flex;flex-flow: row nowrap;">
                <input type="text" name="thing" v-model="thing1" class="thing_but">
                <div class="button_hall" @click="ss1()" name="ss" style="position: relative; left:100px;">搜索</div>
            </div>
        </div>
    </div>
        <div class="div_flex">
            <div class="out_nav">
                <div class="button_hall" @click="sx()">筛选</div>
                <div class="button_hall" @click="ss()">搜索</div>
            </div>
            <div class="out_nav" style="width:300px; top:200px;right: 100px;display: flex;flex-flow: column wrap;align-items: flex-start;">
                <div style="width:100px ; font-size:20px;box-shadow: 3px 3px 5px #babecc, -5px -5px 10px #fff;padding: 10px;margin:5px;border-radius: 10px;font-weight: 100;color: rgb(199, 53, 53); align-self: center;">热度榜</div>
                <div  v-for="(us, index) in rd_dat" :key="index" style="font-size:20px ">
                    <div style="width:270px;box-shadow: 3px 3px 5px #babecc, -5px -5px 10px #fff;margin:5px;padding: 10px;border-radius: 20px; color: #818181;">
                        <div style="display: flex;flex-flow: row nowrap;justify-items: left;">
                            <span style="color:rgb(199, 53, 53)">TOP{{index+1}} &nbsp;&nbsp;</span>
                            <span style="color:black">{{js[us.form_id - 1 ][0]+':'}}</span>
                        </div>
                        <p style="white-space: nowrap; overflow: hidden; text-overflow:ellipsis;width: 100%;margin:0;font-size: 20px;font-weight: 200;">
                            {{us.form1+'---'+us.form2}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="hall_body">
                <router-view></router-view>
            </div>
            <div class="hall_aside"></div>
        </div>
</div>
</template>
<script>
import axios from "axios"
export default {
    name: '失物招领',
    data() {
        return {
            thing:'',
            user_name:this.$route.params.user_name,
            dat:[],
            thing:[],
            thing1:'关键词',
            form_id:0,
            pl_all:[],
            dat1:[],
            dat2:[],
            dat3:[],
            value: [],
            value_ss:[],
            dat_val: [false, false,false,false,false,[],'desc'],
            dat_ss: [false, false, false, false, false, [], 'desc',''],
            desc:5,
            rd_dat:[],
            js: [['寻物', '丢失物 : ', '丢失物介绍 : '], ['失物招领', '物品名 : ', '物品介绍 : '], ['二手交易市场', '二手物品名 : ', '二手物品介绍 : '], ['问题咨询', '问题 : ', '额外信息 : '], ['交友', '标题 : ', '介绍信息 : ']],
        }
    },
    methods: {
        showStu_rd() {
            axios.get('http://localhost:3000/api/Stu/showStu_rd',).then((response) => {
                this.rd_dat = response.data;
                for (let a = 0; a < this.rd_dat.length; a++) {
                    var d = new Date(this.rd_dat[a].time);
                    this.rd_dat[a].time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
                }
            })
            
        },
        sx(){
            var a = document.getElementsByClassName('hall_top')[0];
            var b = document.getElementsByClassName('hall_top')[1];
            if (a.style.display === 'none'){
                a.style.display = 'flex';
                b.style.display = 'none';
            }else{
                a.style.display ='none';
            }
        },
        ss() {
            var a = document.getElementsByClassName('hall_top')[1];
            var b = document.getElementsByClassName('hall_top')[0];
            if (a.style.display === 'none') {
                a.style.display = 'flex';
                b.style.display = 'none';
            } else {
                a.style.display = 'none';
            }
        },
        ss1(){
            this.dat_ss[7] = this.thing1;
            console.log(this.dat_ss[7])
            if (this.value_ss[0] > this.value_ss[1]) {
                let a = this.value_ss[1];
                this.value_ss[1] = this.value_ss[0];
                this.value_ss[0] = a;
            }
            for (let a = 0; a < 2; a++) {
                var d = new Date(this.value_ss[a]);
                this.value_ss[a] = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
            }
            this.dat_ss[5] = this.value_ss;
            if (this.$route.name !== 'hall_ss') {
                this.$router.push({ name: 'hall_ss', params: { val: this.dat_ss } });
            } else {
                this.$router.push({ name: 'fresh1', params: { val: this.dat_ss } });
            }
            var a = document.getElementsByClassName('hall_top')[1];
            a.style.display = 'none';
        },
        sx1(){
            if(this.value[0]>this.value[1])
            {
                let a = this.value[1];
                this.value[1] = this.value[0];
                this.value[0] = a;
            }
            for (let a = 0; a < 2; a++) {
                var d = new Date(this.value[a]);
                this.value[a]= d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
            }
            this.dat_val[5] = this.value;
            if (this.$route.name!=='hall_in')
            {
                this.$router.push({ name: 'hall_in', params: { val: this.dat_val } });
            }else{
                this.$router.push({ name: 'fresh', params: { val: this.dat_val } });
            }
            
            var a = document.getElementsByClassName('hall_top')[0];
            a.style.display ='none';
        },
        click(a){
            let b = document.getElementsByClassName('div1')[a];
            if (b.style.color ==='rgb(199, 53, 53)'){
                b.style.color = '#818181';
                this.dat_val[a] = !this.dat_val[a];
            }else{
                b.style.color ='rgb(199, 53, 53)';
                this.dat_val[a] = !this.dat_val[a];
            }
        },
        click_ss(a) {
            let b = document.getElementsByClassName('div1')[a];
            if (b.style.color === 'rgb(199, 53, 53)') {
                b.style.color = '#818181';
                this.dat_ss[a-7] = !this.dat_ss[a-7];
            } else {
                b.style.color = 'rgb(199, 53, 53)';
                this.dat_ss[a-7] = !this.dat_ss[a-7];
            }
        },
        click1(a){
            let b = document.getElementsByClassName('div1')[a];
            if(a == 5){
                let c = document.getElementsByClassName('div1')[a + 1];
                if (b.style.color === 'rgb(199, 53, 53)') {
                    b.style.color = '#818181';
                    this.dat_val[6] ='desc';
                } else {
                    c.style.color = '#818181';
                    b.style.color = 'rgb(199, 53, 53)';
                    this.dat_val[6] = 'desc';
                }
            }else{
                let c = document.getElementsByClassName('div1')[a - 1];
                if (b.style.color === 'rgb(199, 53, 53)') {
                    b.style.color = '#818181';
                    this.dat_val[6] = 'desc';
                } else {
                    c.style.color = '#818181';
                    b.style.color = 'rgb(199, 53, 53)';
                    this.dat_val[6] = 'asc';
                }
            }
        },
        click1_ss(a) {
            let b = document.getElementsByClassName('div1')[a];
            if (a == 12) {
                let c = document.getElementsByClassName('div1')[a + 1];
                if (b.style.color === 'rgb(199, 53, 53)') {
                    b.style.color = '#818181';
                    this.dat_ss[6] = 'desc';
                } else {
                    c.style.color = '#818181';
                    b.style.color = 'rgb(199, 53, 53)';
                    this.dat_ss[6] = 'desc';
                }
            } else {
                let c = document.getElementsByClassName('div1')[a - 1];
                if (b.style.color === 'rgb(199, 53, 53)') {
                    b.style.color = '#818181';
                    this.dat_ss[6] = 'desc';
                } else {
                    c.style.color = '#818181';
                    b.style.color = 'rgb(199, 53, 53)';
                    this.dat_ss[6] = 'asc';
                }
            }
        },
        showStu1() {
            axios.get('http://localhost:3000/api/Stu/showStu1',).then((response) => {
                this.dat = response.data;
                for(let a=0; a<this.dat.length;a++){
                    var d=new Date (this.dat[a].time);
                    this.dat[a].time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
                }
            })
        },
        showStu2( ) {
            axios.get('http://localhost:3000/api/Stu/showStu2',).then((response) => {
                this.dat1 = response.data;
                for (let a = 0; a < this.dat1.length; a++) {
                    var d = new Date(this.dat1[a].time);
                    this.dat1[a].time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
                }
            })    
        },
        tobe(us ,a ){
            this.showStu2();
            for(let b=0;b<this.dat1.length;b++)
            {
                if(this.dat1[b].id===us.id){
                    this.dat2.push(this.dat1[b]);
                    console.log(this.dat2.length)
                }
            }
            a.style.display = 'flex';
        },
        tt(us,index){
            var a= document.getElementsByClassName('pl')[index];
            if (a.style.display === 'none')
            {
                var b=document.getElementsByClassName('pl');
                for(let c=0;c<b.length;c++){
                    if(c!=index){
                        b[c].style.display="none";
                    }
                }
                this.dat2=[];
                this.tobe(us , a);
            }else{
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
        add( a,index ) {
            axios.post('http://localhost:3000/api/Stu/addStu2', { user_name: this.user_name, time: this.getFormatDate(), text: this.thing[index],id:a.id,}, {}).then((response) => { console.log(response); });
        },
        plsr(a,index){
            if (this.thing[index]==""){
                this.open2()
            }else{
                this.add(a,index)
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
        this.showStu_rd();
    },
}  
</script> 