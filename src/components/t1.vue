<template>
    <div></div>
</template>
 
<script>
export default {
    name: 't1',
    data() {
        return {
        }
    },
    mounted() {
        this.$router.push({ name: 'to_oth', params: { user_name: this.$route.params.user_name, id: this.$route.params.id } });
    }
}

</script>
<style scoped>

</style>