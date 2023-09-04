<style scoped>
#background {
    position: relative;
    top: -2vh;
    left: 2vw;
    background: url("../images/login.jpg") no-repeat;
    background-position: center;
    height: 95vh;
    width: 95vw;
    background-size: cover;
    border-radius: 50px;
    overflow: hidden;
    box-shadow: inset 3px 3px 5px #fff,inset -5px -5px 10px #fff,6px 6px 10px #babecc, -10px -10px 20px #fff;
}

.login {
    position: relative;
    left: 630px;
    top: 25px;
    height: 261px;
    width: 420px;
    padding: 75px 35px 15px 35px;
    
}

.el-carousel__item h3 {
    color: black;
    font-size: 14px;
    line-height: 150px;
    margin: 0;
}

.el-form-item_label {
    font-size: 80px;
}

.el-carousel__item:nth-child(n) {
    background-color:#ebecf0dd;
     border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
}
.block {
    position: relative;
    right: -30px;
    top: -330px;
    min-height: 305px;
    width: 600px;
    background-color: #ebecf0dd;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    padding: 8px;
    box-shadow: inset 3px 3px 5px #babecc, inset -5px -5px 10px #fff;
}

.container {
    position: absolute;
    left: 150px;
    top: 100px;
    width: 1100px;
    height: 400px;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    box-shadow:inset 3px 3px 5px #babecc,inset -5px -5px 10px #fff;
    background-color: #ebecf0dd;
    outline: 20px solid #ebecf0dd;
}
.bottom {
    font-size: 18px;
    font-weight: 100;    
    box-shadow:inset 3px 3px 5px #babecc,inset -5px -5px 10px #fff;
    background-color: #ebecf0dd;
    outline: 10px solid #ebecf0dd;
    width: 300px;
    border-radius: 10px;
    position: absolute;
    bottom: 50px;
    right: 80px;
    padding: 5px;
}

.bottom h3 {
    line-height: 15px;
    font-size: 15px;

}
.el-input_inner{
    border-radius: 30px;
}
.butt {
    
    margin-top: 30px;
}
.div_flex {
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    align-items: center;
}

span {
    font-size: 18px;
    color: #babecc;
    font-weight: bolder;
}
.div_flex input[type="text"],
.div_flex  input[type='password'] {
    color: #757575;
    margin: 20px;
    padding: 25px;
    border-radius: 25px;
    width: 300px;
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
.div_flex input[type="text"]:focus,
.div_flex input[type="password"]:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}
.d_f{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}
.button_an
 {
    color: rgb(197, 92, 50);
    width: 70px;
    margin: 20px;
    padding: 5px;
    box-shadow: 3px 3px 5px #babecc, -3px -3px 5px #fff;
    border: 0px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 200;
    transition: all 0.2s ease 0s;
    text-align: center;
}
.button_zc{
    cursor: pointer;
    font-size: 18px;
    color: rgb(197, 92, 50);
    font-weight: bolder;
}
.button_an:hover {
    box-shadow: 2px 2px 4px #babecc, -2px -2px 5px #fff;
}

.button_an:active {
    box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
}
#yj{
    color: #babecc;
    cursor: pointer;
}
</style>
<template>
    <div>
        <div id="background"> </div>
        <!-- 登录 -->
        <div class="container">
            
            <div class="login">
                <div class="div_flex">
                    <div class="d_f"><span>用户名:</span><input type="text" name="username" v-model="form.username"></div>
                    <div class="d_f"><span> 密 码 :</span>&nbsp;<input type="password" name="password" id="password" v-model='form.password'></div>
                    <div @click="login()" class="button_an">登录</div>
                    <div class="d_f"><span>还没有账号？去</span>
                    <div @click="toURL()" class="button_zc">注册</div>
                </div>
                </div>
            </div>
            <!-- 走马灯 -->
            <div class="block">
                <el-carousel trigger="click" height="352px">
                    <el-carousel-item v-for="item in imgList" :key="item.id">
                        <img :src="item.idView" class="image">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="bottom">
            <h3>出错请联系</h3>
            <i class="el-icon-phone" style="font-size:15px">2222222222</i>
            <br />
            <i class="el-icon-message" style="font-size:15px">2222222222</i>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            imgList: [
                { id: 0, idView: require('../images/zou1.png') },
                { id: 1, idView: require('../images/zou2.png') },
                { id: 2, idView: require('../images/zou3.png') },
                { id: 3, idView: require('../images/zou1.png') }
            ],

            user: [],
            form: {
                value: [],
                username: '',
                password: '',

            },
            user_username:[],
            user_password:[],
            container: {
                backgroundImage: "url(" + require("../images/login.jpg") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
            }
        }
    },
    created() {
        axios.get('http://localhost:3000/api/Stu/showStu_login',).then((response) => {
            this.user = response.data ;
        })
    },
    methods: {
        add: function () {
            console.log('添加成功');
            axios.post('http://localhost:3000/api/Stu/addflower',
                {
                    name: this.name1
                }, {}).then((response) => { console.log('添加成功'); });
        },
        //点击注册按钮，跳转注册页面
        toURL() {
            //this.$router.push({ name: 'Firstpage', params: { user_name:'17853727205'} });
            this.$router.push({ path: '/register' })
        },
        //用户登录
        login() {
            this.$router.push({ name: 'Firstpage', params: { user_name:'17853727205' } });
        },
    },
    beforeCreate() {
        document.querySelector('body').setAttribute('style', 'background-color:#ebecf0dd');
    },
}
</script>

