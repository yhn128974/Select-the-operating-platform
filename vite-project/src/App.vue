<template>
  <div>
    <ul>
      <li><router-link to="/">Go to Home</router-link></li>
      <li><router-link to="/login">Go to login page</router-link></li>
      <li><router-link to="/404">Go to 404</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// import request from "@/utils/request";

import { reqLogin } from "@/api/user";

import { onMounted } from "vue";
// 当组件挂在完毕测试发一个请求
onMounted(() => {
  reqLogin({
    username: "admin",
    password: "111111",
  });
  // request({
  //   url: "/api/user/login",
  //   method: "POST",
  //   data: {
  //     username: "admin",
  //     password: "111111",
  //   },
  // }).then((res) => {
  //   console.log(res);
  // });
});
</script>

<style scoped></style>
