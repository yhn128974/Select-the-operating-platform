<template>
  <div>axios封装测试</div>
</template>

<script setup lang="ts">
import request from "@/utils/request";
import { onMounted } from "vue";
// 当组件挂在完毕测试发一个请求
onMounted(() => {
  request({
    url: "/api/user/login",
    method: "POST",
    data: {
      username: "admin",
      password: "111111",
    },
  }).then((res) => {
    console.log(res);
  });
});
</script>

<style scoped></style>
