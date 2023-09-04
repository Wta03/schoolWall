<style>
.flex_over{
    display: flex;
    flex-flow: row nowrap;
    align-content: center;
    align-items: center;
    justify-content:space-evenly;
    margin-right: 40px;
    text-align: center;
}
.flex_d{
    width: 700px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    justify-items: center;
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
    right: 5%;
    text-align: center;
}
.flex_d div{
    margin: 30px;
    background-color: #ebecf0dd;
    border-radius: 20px;
    box-shadow: 3px 3px 5px #babecc, -3px -3px 5px #fff;
    transition: all 0.4s ease 0s;
}
.flex_d div:hover{
    box-shadow: 2px 2px 4px #babecc, -2px -2px 5px #fff;
}
.flex_d div:active{
    box-shadow: 1px 1px 2px #babecc, -1px -1px 2px #fff;
}
.flex_d div:hover .p{
    text-shadow: 0px 0px 0px #fff, -0px -0px 0px rgb(71, 71, 71);
    color: #757575;
}
.p{
    width: 100%;
    height: 100%;
    position:relative;
    padding: 0px;
    margin: 0px;
    font-size: 40px;
    transform: translateY(calc(50% - 23px));
    color: #ebecf0dd;
    text-shadow: 1px 1px 1px rgb(71, 71, 71), -1px -1px 1px #fff;
    transition: all 1s ease 0s;
    cursor: pointer;
    display: inline-block;
}
</style>
<template>
    <div class="flex_over">
        <div class="flex_d">
            <div style="width:200px;height:200px;cursor: pointer;">
                <p class="p"  @click="on1">寻物</p>
            </div>
            <div style="width:300px;height:200px;cursor: pointer;">
                <p class="p" @click="on2">失物招领</p>
            </div>
            <div style="width:560px;height:200px;cursor: pointer;">
                <p class="p" @click="on3">二手交易市场</p>
            </div>
            <div style="width:300px;height:200px;cursor: pointer;">
                <p class="p" @click="on4">问题咨询</p>
            </div>
            <div style="width:200px;height:200px;cursor: pointer;">
                <p class="p" @click="on5">交友</p>
            </div>
        </div>
        <div class="div_frame">
            <router-view></router-view>
        </div>
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
        goBack() {
            console.log('go back');
            this.$router.push({ name: 'body', params: { user_name: this.$route.params.user_name } });
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
    },
}
</script>
