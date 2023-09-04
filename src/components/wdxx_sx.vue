<style scoped>
.all{
    display: flex;
    flex-flow: row  nowrap;
}
.bk{
    border-radius: 20px;
    border: 5px solid #babecc;
    display: flex;
    flex-flow: column wrap;
    padding: 10px;
    max-height: 400px;
    width: 200px;
}

.ww{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border-bottom: 2px solid #818181;
    border-top: 2px solid #818181;

}
.dd{
    display: flex;
    flex-flow: column wrap;
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
    border-bottom: 2px solid #818181;
    border-top: 2px solid #818181;
}
.ww:hover{
    border: #babecc 4px solid;
    border-radius: 10px;
}
.only{
    border: #babecc 4px solid;
        border-radius: 10px;
}
.zhu {
    position:relative;
    display: flex;
    width: 700px;
    height: 500px;
    margin-left: -4px;
    border: 4px solid #babecc;
    border-radius: 20px;
    padding: 10px;
}
</style>
<template>
    <div class="all"  >
        <div class="bk">
            <div  v-for="(us, index) in user_sx" :key="index" class="ww" @click="dj(us,index)" style="color:black;">
                <div style="cursor: pointer;">
                    <img v-bind:src="`${us.tx_imge2}`" style="border-radius: 50%;height: 65px;width: 65px;">
                </div>
                <div class="dd">
                    <p class="name">{{ us.name2 }}</p>
                    <p class="time">{{ us.user2 }}</p>
                </div>
            </div>
        </div>
        <div class="zhu">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            user_sx:[],
            user_sxd:[],
            user_name: this.$route.params.user_name,
            duser: this.$route.params.duser,
        };
    },
    methods: {
        dj(us,index){
            var a = document.getElementsByClassName('ww')[index];
            if (a.className === 'ww') {
                var b = document.getElementsByClassName('ww');
                for (let c = 0; c < b.length; c++) {
                    if (c != index) {
                        b[c].className ='ww' 
                    }
                }
                a.className += ' only';
            }
            if (this.$route.name !== 'to_oth') {
                this.$router.push({ name: 'to_oth', params: { user_name: this.user_name, id: us.id } });
            } else {
                this.$router.push({ name: 't1', params: { user_name: this.user_name, id: us.id } });
            }   
        },
        showStu1() {
            axios.get('http://localhost:3000/api/Stu/showStu_user_sx',).then((response) => {
                this.user_sxd= response.data;
                for (let a = 0; a < this.user_sxd.length; a++) {
                    if(this.user_sxd[a].user1 ==this.user_name)
                    {
                        this.user_sx.push(this.user_sxd[a]);
                    }else if(this.user_sxd[a].user2 == this.user_name){
                        let b=this.user_sxd[a].user2;
                        this.user_sxd[a].user2=this.user_sxd[a].user1;
                        this.user_sxd[a].user1=b;
                        this.user_sx.push(this.user_sxd[a]);
                    }
                }
            })
        },
    },
    mounted() {
        this.showStu1();
    },
}
</script>
