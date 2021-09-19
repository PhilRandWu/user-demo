<template>
  <div class="UserName-container">
      <span>loading...</span>

      <template>
        <router-link to="User">用户</router-link>
        <a href="">退出</a>
      </template>

      <router-link to="Login">Login</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.UserName-container {
  display: inline-block;
}
.UserName-container a,
.UserName-container span {
  margin-right: 15px;
}
</style>
