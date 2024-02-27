<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">站位的位子</el-col>
      <el-col :span="12" :xs="24" class="login_form">
        <el-from>
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input
              type="text"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-from-item>
            <el-button type="primary" size="default" class="login_btn"
              >登陆</el-button
            >
          </el-from-item>
        </el-from>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive } from "vue";

let loginForm = reactive({
  username: "",
  password: "",
});
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
  .login_form {
    padding: 40px;
    position: relative;
    width: 80%;
    top: 30vh;
    background-color: #fff;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    h1 {
      color: white;
      font: size 40px;
    }
    h2 {
      font-size: 20px;
      color: #fff;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
