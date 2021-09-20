<template>
  <h1>Loading...</h1>
</template>

<script>
export default {
    created() {
        this.unwatch = this.$store.watch(() => this.$store.getters['User/status'],(status) => {
            if(status != 'loading') {
                const path = this.$route.query.returnUrl || {name: 'Home'};
                this.$router.push(path).catch(() => {});
            }
        },{
            immediate: true,
        })
    }
}
</script>

<style>

</style>
