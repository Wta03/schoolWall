<!-- 空页面，负责中转到目标页面 -->
<template>
    <div></div>
</template>
 
<script>
export default {
    name: 'fresh',
    data() {
        return {
        }
    },
    mounted(){
        this.$router.push({ name: 'hall_in', params: { val: this.$route.params.val } });
    }
}

</script>
<style scoped>

</style>