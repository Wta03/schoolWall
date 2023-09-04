<template>
    <div class="jygl-all">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item @click="on0()" index="1">发表信息</el-menu-item>
            <el-submenu  index="2">
                <template slot="title">我的消息</template>
                <el-menu-item @click="on1()" index="2-1">私信</el-menu-item>
                <el-menu-item @click="on2()" index="2-2">好友</el-menu-item>
            </el-submenu>
            <el-menu-item @click="on3()" index="3">个人信息</el-menu-item>
            <el-menu-item @click="on4()" index="4">账号管理</el-menu-item>
            <el-menu-item @click="on5()" index="5">所有</el-menu-item>
        </el-menu>
        <br>
        <router-view></router-view>
    </div>
</template>
<script >
import axios from 'axios';
export default {
    data() {
        return {
            drawer: false,
            drawer1: false,
            direction: 'rtl',
            activeIndex2: '',
        };
    },
    methods: {
        on0() {
            this.$router.push({ name: 'fbxx', params: { user_name: this.$route.params.user_name } });
            this.activeIndex2='0'
        },
        on1() {
            this.$router.push({ name: 'wdxx_sx', params: { user_name: this.$route.params.user_name, duser: this.$route.params.user_name } });
            this.activeIndex2 = '1'
        },
        on2() {
            this.$router.push({ name: 'wdxx_hy', params: { user_name: this.$route.params.user_name } });
            this.activeIndex2 = '2'
        },
        on3() {
            this.$router.push({ name: 'grxx', params: { user_name: this.$route.params.user_name } });
            this.activeIndex2 = '3'
        },
        on4() {
            this.$router.push({ name: 'zhxx', params: { user_name: this.$route.params.user_name } });
            this.activeIndex2 = '4'
        },
        on5() {
            this.$router.push({ name: 'sy', params: { user_name: this.$route.params.user_name } });
            this.activeIndex2 = '5'
        },
    }
}
</script>
<style scoped>
.jygl-all {
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 60vw;
    margin-left: 10vw;
}

.jygl-sjc {
    position: absolute;
    top: 50vh;
    left: 0vw;
    width: 30vw;
    margin-left: 10vw;
}
</style>