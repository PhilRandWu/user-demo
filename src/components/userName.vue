<template>
  <div class="UserName-container">
    <span v-if="status == 'loading'">loading...</span>

    <template v-else-if="status == 'login'">
      <router-link
        :to="{
          name: 'User',
        }"
        >{{ data.name }}</router-link
      >
      <a href="" @click.prevent="handleLoginOut">退出</a>
    </template>

    <router-link v-else :to="{ name: 'Login' }" exact-path>Login</router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("User", ["status"]),
    ...mapState("User", ["data"]),
  },
  methods: {
    async handleLoginOut() {
      await this.$store.dispatch("User/loginOut");
      this.$router.push({
        name: "Login",
      });
    },
  },
};
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
