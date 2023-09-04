<template>
    <div class="jygl-all">
        <el-divider></el-divider>
        <br>
        <br>
        <el-descriptions class="margin-top" title="账号管理" :column="3" :size="size" border>
        
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-user"></i>
                    用户名
                </template>
                {{ us.user_name }}
            </el-descriptions-item>
            <el-descriptions-item>
                <template slot="label">
                    <i class="el-icon-key"></i>
                    密码
                </template>
                {{ us.user_password }}
            </el-descriptions-item>
            <template slot="extra">
                <el-button @click="drawer1 = true" type="primary" style="margin-left: 16px;">
                    修改密码
                </el-button>
                <el-drawer title="修改密码" ref="navDrawer1" :visible.sync="drawer1" :with-header="false">
                    <div style="padding:5vh">
                        <span> 新密码为:</span>
                        <br>
                        <el-input v-model="us.user_password" placeholder="请输入内容" style="width:20vw"></el-input>
                        <br>
                        <br>
                        <el-button type="primary" style="margin-left:7vw" @click="tijiao1()">修改</el-button>
                    </div>
                </el-drawer>
            </template>
        </el-descriptions>
        <br>
        <br>
        <el-button type="danger" round style="margin-left:50vw" @click="tc()">退出登录</el-button>
        <br>
        <br>
        <el-button type="danger" round style="margin-left:50vw;" @click="zx()">注销账号</el-button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            pas: [],
            us: {
                user_name: this.$route.params.user_name,
                user_password: "",
                circleUrl: '',
                qq: "",
                d: "",
                user_id: '',
                name: '',
                age: '',
                birday: '',
                six: '',
            },
            src: ' ',
            fileList: [],//图片列表
            drawer: false,
            drawer1: false,
            direction: 'rtl',
            activeIndex2: '5',
            form: {
                num: 0,
                title: '',
                city: '',
                exhibitionType: '',
                extension: '',
                businessHours: '',
                location: '',
                name: '',
                number: '',
                imgBanner: '',
                img: [],
                content: '',
            },
        };
    },
    methods: {
        on0() {
            this.$router.push({ name: 'fbxx', params: { user_name: this.$route.params.user_name } });
        },
        on1() {
            this.$router.push({ name: 'wdxx_sx', params: { user_name: this.$route.params.user_name } });
        },
        on2() {
            this.$router.push({ name: 'wdxx_hy', params: { user_name: this.$route.params.user_name } });
        },
        on3() {
            this.$router.push({ name: 'grxx', params: { user_name: this.$route.params.user_name } });
        },
        on4() {
            this.$router.push({ name: 'zhxx', params: { user_name: this.$route.params.user_name } });
        },
        on5() {
            this.$router.push({ name: 'sy', params: { user_name: this.$route.params.user_name } });
        },
        open() {
            this.$message({
                message: '修改完成',
                type: 'success'
            });
        },
        open1() {
            this.$alert('登出成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'success',
                        message: `登出成功`
                    });
                }
            });
        },
        open2() {
            this.$alert('注销成功', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'success',
                        message: `注销成功`
                    });
                }
            });
        },
        update1() {
            if (this.src != this.us.circleUrl) {
                this.src = 'http://localhost:3000/' + this.src
            }
            axios.post('http://localhost:3000/api/Stu/updateStu3', { tx_imge: this.src, name: this.us.name, user_name: this.us.user_name }).then((response) => {
                console.log(response);
            })
            axios.post('http://localhost:3000/api/Stu/updateStu5', { tx_imge: this.src, name: this.us.name, user_name: this.us.user_name }).then((response) => {
                console.log(response);
            })
            axios.post('http://localhost:3000/api/Stu/updateStu2', { name: this.us.name, d: this.us.d, qq: this.us.qq, circleUrl: this.src, age: this.us.age, birday: this.us.birday, six: this.us.six, username: this.us.user_name }).then((response) => {
                console.log(response);
            })
            this.$router.go(0)
        },
        update2() {
            axios.post('http://localhost:3000/api/Stu/updateStu1', { password: this.us.user_password, username: this.us.user_name }).then((response) => {
                console.log(response);
            })
        },
        goBack() {
            console.log('go back');
            this.$router.push({ name: 'body', params: { user_name: this.$route.params.user_name } });
        },
        tijiao() {
            this.update1();
            this.$refs.navDrawer.doClose();
            this.open();
        },
        tijiao1() {
            this.update2();
            this.$refs.navDrawer1.doClose();
            this.open();
        },
        showStu1() {
            axios.get('http://localhost:3000/api/Stu/showStu_grzx',).then((response) => {
                this.pas = response.data;
                for (let a = 0; a < this.pas.length; a++) {
                    if (this.pas[a].username == this.$route.params.user_name) {
                        this.us.user_password = this.pas[a].password;
                        this.us.circleUrl = this.pas[a].circleUrl;
                        this.us.d = this.pas[a].d;
                        this.us.qq = this.pas[a].qq;
                        this.us.user_id = this.pas[a].user_id;
                        this.us.name = this.pas[a].name;
                        this.us.age = this.pas[a].age;
                        this.us.birday = this.pas[a].birday;
                        this.us.six = this.pas[a].six;
                        this.src = this.pas[a].circleUrl;
                        break;
                    }
                }
            })
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        tc() {
            this.$router.push('/');
            this.open1();
        },
        zx() {
            this.changeMsg();
            this.$router.push('/');
            this.open2();
        },
        changeMsg() {
            axios.post('http://localhost:3000/api/Stu/delStu1', { username: this.us.user_name }).then((response) => {
                console.log(response);
            })
        },
        button_click() {
            var file = document.getElementById("file");
            file.click();
        },
        fileChange(el) {
            const file = el.target.files[0];
            console.log(file);
            this.fileName = file.name;
        },
        uploadSuccess(res, file) {
            console.log(file);
            this.form.img.push(res.data.path)
            this.fileName = file.name;
            this.src = file.response.data.path;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList, '1111111');
            //删除图片时也要把form.imgBanner和form.img里的数据删除
            if (file.name === "banner.jpg") {
                this.form.imgBanner = ''
            } else {
                //给数组封装一个方法，用来删除数组中指定的数据
                Array.prototype.contains = function (obj) {
                    var i = this.length;
                    while (i--) {
                        if (this[i] === obj) {
                            return i;  // 返回的这个 i 就是元素的索引下标，
                        }
                    }
                    return false;
                }
                const path = file.response.data.path
                this.form.img.splice(this.form.img.contains(path), 1)
                // console.log(this.form.img,'删除后的form.img')
            }
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}`);
        },
    },
    mounted() {
        this.showStu1();
    }
}
</script>
<style scoped>
.jygl-all {
    position: absolute;
    left: -17%;
    width: 60vw;
}

.jygl-sjc {
    position: absolute;
    top: 50vh;
    left: 0vw;
    width: 30vw;
    margin-left: 10vw;
}
</style>