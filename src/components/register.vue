<style  scoped>
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
    box-shadow: inset 3px 3px 5px #fff, inset -5px -5px 10px #fff, 6px 6px 10px #babecc, -10px -10px 20px #fff;
}

.container {
    position: absolute;
    top: 100px;
    left: 32%;
    width: 500px;
    height: 500px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
     box-shadow:inset 3px 3px 5px #babecc,inset -5px -5px 10px #fff;
    background-color: #ebecf0dd;
    outline: 20px solid #ebecf0dd;
    border-radius: 10px;
}

.demo-ruleForm {
    margin-top: 120px;
    padding-right: 20px;
}

.icon {
    position: relative;
    top: -80px;
    left: 175px;
}

.box {
    width: 100%;
    height: 800px;
}

.top {
    position: absolute;
}

.last {
    position: relative;
    left: 90px;
    top: 65px;
}

.next {
    position: relative;
    top: -110px;
    left: 265px;

}
</style>
<template>
    <div>
        <div id="background"></div>
        <div class="container">


            <div class="top">
                <div class="last">
                    <el-button size="mini" round v-show="index != 0" @click="last">上一张</el-button>
                </div>
                <!-- 头像 -->
                <div class="icon">
                    <el-avatar :size="140" :src="circleUrl[index]"></el-avatar>
                </div>
                <div class="next">
                    <el-button size="mini" round v-show="index != 4" @click="next">下一张</el-button>
                </div>
            </div>

            <div class="form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="学号" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="昵称" prop="nc">
                        <el-input v-model="ruleForm.nc"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input v-model="ruleForm.pass"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :plain="true" @click="toRegister">立即注册</el-button>
                        <el-button @click="toLogin">返回登录界面</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </div>
    </div>
</template>

<script >
import axios from 'axios'
import circleUrl1 from '../images/th1.jpg'
import circleUrl2 from '../images/th2.jpg'
import circleUrl3 from '../images/th3.jpg'
import circleUrl4 from '../images/th4.jpg'
import circleUrl5 from '../images/th5.jpg'
export default {
    data() {
 
        return {
            username:[],
            ruleForm: {
                name: '',
                pass: '',
                nc:'',
                user: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 1, max: 18, message: '长度在 1 到 18个字符', trigger: 'blur' }
                ],
                nc:[
                    { required: true, message: '请输入昵称', trigger: 'blur' },
                    { min: 1, max:10, message: '长度在 1 到 10个字符', trigger: 'blur' }
                ],
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 10, message: '密码长度在 6到 10个字符', trigger: 'blur' }
                ],
            },
            box: {
                backgroundImage: "url(" + require("../images/register.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
            },
            fit: 'contain',
            circleUrl: [circleUrl1, circleUrl2, circleUrl3, circleUrl4, circleUrl5],
            index: 0,
        }
    },
    methods: {
        toLogin() {
            this.$router.push({ path: '/' })
        },
        toRegister() {
            axios.get('http://localhost:3000/api/Stu/showStu_login',).then((response) => {
            this.user = response.data
            console.log(this.user);
             for(let i=0;i<this.user.length;i++){
                this.username[i]=this.user[i].username;
             }
               if(this.ruleForm.name != null &&this.ruleForm.pass && this.ruleForm.name){
                 for(let i=0;i<=this.username.length;i++){
                 if(this.ruleForm.name==this.username[i]){
                     this.$message({
                     showClose: true,
                     message: '用户名已存在',
                     type: 'error',
                    });
                    break;
                 }
               else if(i>=this.username.length){
                   axios.post('http://localhost:3000/api/Stu/addStu_login', {
                    username: this.ruleForm.name,
                    password: this.ruleForm.pass,
                    name:this.ruleForm.nc,
                    circleUrl: 'http://localhost:3000/public/tx/th'+this.index+'.png' }, {}).then(res => {
                    this.$refs.ruleForm.resetFields()
                    this.$message({
                        message: '注册成功',
                        type: 'success'
                    });
                    this.$router.push({ path: '/' })
                })   
                break;
               }
                
              }
            }
                else{
                   this.$message({
                     showClose: true,
                     message: '请填写完整信息',
                     type: 'error'
                });
            }
        })
                    
    },
        last() {
            this.index--;
        },
        next() {
            this.index++;
        }
    }
}

</script>

