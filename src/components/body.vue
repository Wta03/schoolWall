<template>
    <div>
        <div class="firstpage-zmd">
            <el-carousel :interval="2000" type="card" height="35vh">
                <el-carousel-item v-for="item in 4" :key="item">
                </el-carousel-item>
            </el-carousel>
            <br>
            <el-divider></el-divider>
            <br>
            <h5 style="font-size:20px"><b>功能展示</b></h5>
        </div>
        <div class="firstpage-button">
            <br>
            <br>
            <i class="el-icon-menu" style="font-size:3.5vh;"></i>
            <el-link type="info" style="font-size:2vh;margin-left:7vw" @click="a1()">所有事务</el-link>
            <el-link type="info" style="font-size:2vh;margin-left:7vw" @click="a2()">寻 物</el-link>
            <el-link type="info" style="font-size:2vh;margin-left:7vw" @click="a3()">失物招领</el-link>
            <br>
            <br>
            <br>
            <br>
            <el-link type="info" style="font-size:2vh;margin-left:7vw" @click="a4()">二手物品交易市场</el-link>
            <el-link type="info" style="font-size:2vh;margin-left:7vw" @click="a5()">问题咨询</el-link>
            <el-link type="info" style="font-size:2vh;margin-left:7vw" @click="a6()">寻人</el-link>
            <br>
            <br>
            <br>
            <br>
            <i class="el-icon-s-order" style="font-size:3.5vh;"></i>
            <el-link type="info" style="font-size:2vh;margin-left:7vw" @click="a7()">发表事务表单</el-link>
            <el-link type="info" style="font-size:2vh;margin-left:7vw" @click="a8()">发 表 寻 物</el-link>
            <el-link type="info" style="font-size:2vh;margin-left:7vw" @click="a9()">发表失物招领</el-link>
            <br>
            <br>
            <br>
            <br>
            <el-link type="info" style="font-size:2vh;margin-left:7vw" @click="a10()">发表二手物品</el-link>
            <el-link type="info" style="font-size:2vh;margin-left:7vw" @click="a11()">发布问题咨询</el-link>
            <el-link type="info" style="font-size:2vh;margin-left:7vw" @click="a12()">发布寻人</el-link>
            <br>
            <br>
            <br>
            <br>
            <i class="el-icon-location" style="font-size:3.5vh;margin-left:0vw"></i>
            <el-link type="info" style="font-size:2vh;margin-left:5vw" @click="a13()">线下活动</el-link>

            <i class="el-icon-s-custom" style="font-size:3.5vh;margin-left:10vw"></i>
            <el-link type="info" style="font-size:2vh;margin-left:6vw" @click="a14()">个人中心</el-link>
            <br>
            <br>
            <br>
            <br>
            <i class="el-icon-s-flag" style="font-size:3.5vh;margin-left:0vw;"></i>
            <el-link type="info" style="font-size:2vh;margin-left:5vw" @click="a15()">爱心求救</el-link>

            <i class="el-icon-s-goods" style="font-size:3.5vh;margin-left:9vw;"></i>
            <el-link type="info" style="font-size:2vh;margin-left:6vw" @click="a16()">爱助活动</el-link>
            <br>
            <br>
            <br>
            <br>
            <i class="el-icon-s-comment" style="font-size:3.5vh;margin-left:0vw;"></i>
            <el-link type="info" style="font-size:2vh;margin-left:5vw" @click="a9()">信息</el-link>
            <br>
            <br>
            <br>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            username:'',
            t1: "user1",
            isCollapse: true
        };
    },
    methods: {
        a1() {
            this.$router.push({ name: 'friend', params: { user_name: this.$route.params.username } });
        },
        a2() {
            this.$router.push({ name: 'friend', params: { user_name: this.$route.params.username } });
        },
        a3() {
            this.$router.push({ name: 'friend', params: { user_name: this.$route.params.username } });
        },
        a4() {
            this.$router.push({ name: 'friend', params: { user_name: this.$route.params.username } });
        },
        a5() {
            if (this.t1 === "user1") {
                this.$router.push({ name: 'friend', params: { user_name: this.$route.params.username } });
            }
            else {
                this.$router.push({ name: 'friend', params: { user_name: this.$route.params.username } });
            }
        },
        a6() {
            this.$router.push({ name: 'friend', params: { user_name: this.$route.params.username } });
        },
        a7() {
            this.$router.push({ name: 'friend', params: { user_name: this.$route.params.username } });
        },
        a8() {
            this.$router.push({ name: 'friend', params: { user_name: this.$route.params.username } });
        },
        a9() {
            this.$router.push({ name: 'friend', params: { user_name: this.$route.params.username } });
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style>
.el-carousel__item:nth-last-child(3) {
    background-image: url("../images/zou1.png");
    background-clip: content-box;
}

.el-carousel__item:nth-last-child(4) {
    background-image: url("../images/zou2.png");
    background-clip: content-box;
}

.el-carousel__item:nth-last-child(1) {
    background-image: url("../images/zou3.png");
    background-clip: content-box;
}

.el-carousel__item:nth-last-child(2) {
    background-image: url("../images/zou1.png");
    background-clip: content-box;
}

.firstpage-zmd {
    position: absolute;
    top: 10vh;
    left: 10vw;
    width: 60vw;
    margin-left: 10vw;
}

.firstpage-button {
    position: absolute;
    top: 70vh;
    left: 20vw;
    width: 40vw;
    margin-left: 10vw;

}

.firstpage-butt {
    display: inline-block;
    height: 10vh;
    width: 10vh;
    margin: 0vw 10vw 10vw 10vw;
}
</style>