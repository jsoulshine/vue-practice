<template>
  <Card>
    <Button type="primary" @click="handleLogin">Login</Button>
  </Card>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "login",
  props: {},
  data() {
    return {};
  },
  methods: {
    handleLogin() {
      Cookies.set("account", "jss"); //统一写在store里面
      let redirectName = this.$route.query.redirect || "home";
      this.$router.replace(
        {
          //比较push和replace，go等的区别
          name: redirectName
        },
        this.loginSuccess()
      );
      this.$http({
        method: "GET",
        url: "/api/loginData"
      })
        .then(res => {
          console.log(res);
          if (res.code === 200) {
            //数据存储
            this.$store.commit("login", {
              account: res.user.account,
              userId: res.user.userId,
              token: res.token
            });
            //跳转
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    loginSuccess() {
      this.$Message.success("Login Success");
    }
  }
};
</script>

<style scoped>
</style>

