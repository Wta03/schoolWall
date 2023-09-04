<style  scoped>
body{
    box-sizing: border-box;
}
.all{
    position:absolute;
    width: 100%;
}
.el-header {
    background-color: rgb(153, 144, 144);
    color: white;
    line-height: 60px;
}
.bj {
    position: fixed;
    background-image: url(../images/背景.jpg);
    background-origin: border-box, border-box;
    background-attachment: fixed, fixed;
    background-size: cover, cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.1;
}
.el-aside {
    color: rgb(255, 255, 255);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    border-radius: 20px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-last-child(3) {
    background-image: url("../images/th1.jpg");
    background-clip: content-box;
}

.el-carousel__item:nth-last-child(4) {
    background-image: url("../images/th1.jpg");
    background-clip: content-box;
}

.el-carousel__item:nth-last-child(1) {
    background-image: url("../images/th1.jpg");
    background-clip: content-box;
}

.el-carousel__item:nth-last-child(2) {
    background-image: url("../images/th1.jpg");
    background-clip: content-box;
}


.cleafix:after {
    content: '.';
    display: block;
    clear: both;
    overflow: hidden;
    height: 0;
}
</style>
<template>
    <div class="all">
            <div class="bj"></div>
        <el-container>
            <el-header style="text-align: right; font-size: 15px">
                <el-dropdown>
                    <i class="el-icon-setting"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="c1()">个人中心</el-dropdown-item>
                        <el-dropdown-item @click.native="c2()">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>{{ id1 }}</span>
            </el-header>
            <el-main>
            </el-main>
        </el-container>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu router :default-active="$route.path" class="el-menu-vertical-demo cleafix" @open="handleOpen"
            @close="handleClose" :collapse="isCollapse" style="position:fixed;">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-order"></i>
                    <span slot="title">发表墙</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">发表事务</span>
                    <el-menu-item @click="on0()" index="">填写事务表单</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <span slot="title">搜寻与招领</span>
                    <el-menu-item @click="on1()" index="">填写寻物表单</el-menu-item>
                    <el-menu-item @click="on2()" index="">填写失物招领表单</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="二手市场">
                    <el-menu-item @click="on3()" index="">填写二手交易表单</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">其他</span>
                    <el-menu-item @click="on4()" index="">填写问题咨询表单</el-menu-item>
                    <el-menu-item @click="on5()" index="">填写交友表单</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">表白墙</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">事务类型</span>
                    <el-menu-item @click="on6()" index="">所有事务</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <span slot="title">搜寻与招领</span>
                    <el-menu-item @click="on7()" index="">寻物</el-menu-item>
                    <el-menu-item @click="on8()" index="">失物招领</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="二手市场">
                    <el-menu-item @click="on9()" index="">二手交易市场</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">其他</span>
                    <el-menu-item @click="on10()" index="">问题咨询</el-menu-item>
                    <el-menu-item @click="on11()" index="">寻人</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item @click="on12()" index="">
                <i class="el-icon-location"></i>
                <span slot="title">大厅</span>
            </el-menu-item>
            <el-menu-item @click="on13()" index="">
                <i class="el-icon-s-comment"></i>
                <span slot="title">信息</span>
            </el-menu-item>
        </el-menu>
            <router-view></router-view>
    </div>

</template>


<script>
export default {
    data() {
        return {
            id1: this.$route.params.id,
            num: "",
            isCollapse: true
        };
    },
    methods: {
        on0() {
            this.$router.push({ name: 'home', params: { user_name: this.$route.params.user_name } });
        },
        on1() {
            this.$router.push({ name: 'get', params: { user_name: this.$route.params.user_name } });
        },
        on2() {
            this.$router.push({ name: 'find', params: { user_name: this.$route.params.user_name } });
        },
        on3() {
            this.$router.push({ name: 'twohand', params: { user_name: this.$route.params.user_name } });
        },
        on4() {
            this.$router.push({ name: 'question', params: { user_name: this.$route.params.user_name } });
        },
        on5() {
            this.$router.push({ name: 'friend', params: { user_name: this.$route.params.user_name } });
        },
        on6() {
            this.$router.push({ name: 'hall_main', params: { user_name: this.$route.params.user_name } });
        },
        on7() {
            this.$router.push({ name: 'hall_get', params: { user_name: this.$route.params.user_name } });
        },
        on8() {
            this.$router.push({ name: 'hall_find', params: { user_name: this.$route.params.user_name } });
        },
        on9() {
            this.$router.push({ name: 'hall_twohand', params: { user_name: this.$route.params.user_name } });
        },
        on10() {
            this.$router.push({ name: 'hall_question', params: { user_name: this.$route.params.user_name } });
        },
        on11() {
            this.$router.push({ name: 'hall_friend', params: { user_name: this.$route.params.user_name } });
        },
        on12() {
            this.$router.push({ name: 'body', params: { user_name: this.$route.params.user_name } });
        },
        c1() {
            this.$router.push({ name: 'grzx', params: { user_name: this.$route.params.user_name } });
        },
        c2() {
            this.$router.push('/');
            this.open1();
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
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
    },

}
</script>
