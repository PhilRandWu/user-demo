<template>
  <div id="app">
    <div id="nav">
      <routerLink to="/">Home</routerLink> |
      <UserName></UserName>
    </div>
    <routerView></routerView>
  </div>
</template>

<script>
import UserName from "@/components/userName.vue";
export default {
  components: {
    UserName,
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
