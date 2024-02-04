<template>
  <div>
    <h1>hello world！</h1>
    <el-button type="primary" :icon="Edit" circle />
    <Test></Test>
  </div>
</template>

<script setup lang="ts">
import { Edit } from "@element-plus/icons-vue";
import Test from "@/components/test.vue";

console.log(import.meta.env);
</script>

<style scoped></style>
