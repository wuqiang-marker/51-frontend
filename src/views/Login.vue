<template>
  <div class="login">
    <div class="login-con">
      <el-form class="login-form" :model="loginForm" :rules="rules" ref="loginForm">
        <h1>
          <i class="el-icon-fa el-icon-fa-sign-in"></i>&nbsp;欢迎登陆</h1>
        <div class="input-con">
          <el-form-item prop="userid">
            <el-input type="text" v-model="loginForm.userid" placeholder="账号" size="large" :disabled="sysLogin.disLogin">
              <template slot="prepend">
                <i class="el-icon-fa el-icon-fa-user"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="passwd">
            <el-input type="password" v-model="loginForm.passwd" placeholder="密码" size="large" :disabled="sysLogin.disLogin" @keyup.native.enter='handleSubmit'>
              <template slot="prepend">
                <i class="el-icon-fa el-icon-fa-lock"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-button class="btnSubmit" type="primary" @click.native.prevent="handleSubmit" :loading="sysLogin.loading" :disabled="sysLogin.disLogin">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import config from "../resources/config";

export default {
  computed: {
    sysLogin() {
      return this.$store.state.base.sysLogin;
    }
  },
  data() {
    return {
      logining: false,
      needCaptcha: false,
      disLogin: false,
      loginForm: {
        userid: "",
        passwd: ""
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  mounted() {
    this.$store.dispatch("base/logck");
  },
  methods: {
    handleSubmit(ev) {
      this.$refs.loginForm.validate(valid => {
        if (!valid) {
          return false;
        }
        this.logining = true; //登陆成功
        this.$router.push("/");
        // this.$store
        //   .dispatch("base/login", this.loginForm)
        //   .then(() => {
        //     this.$router.push("/");
        //   })
        //   .catch(() => {
        //     this.logining = false;
        //     this.$refs.captcha.changeImg();
        //   });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("../assets/login_bg.jpg");
  background-position: 50% 50%;
  background-size: cover;
}

.login-con {
  position: absolute;
  right: 160px;
  top: 50%;
  -webkit-transform: translateY(-60%);
  transform: translateY(-60%);
  width: 300px;
  min-height: 200px;
  background-color: #fff;
  border-radius: 4px;
  .login-form {
    box-shadow: none;
    h1 {
      height: 30px;
      line-height: 30px;
      margin: 0;
      font-size: 12px;
      padding-left: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }
    .input-con {
      padding: 15px 20px;
    }
    .el-form-item {
      border-radius: 4px;
      margin-bottom: 1em;
    }
    .el-icon-fa::before {
      font-size: 15px;
    }
    input {
      height: 30px;
      line-height: 30px;
      background-color: #fff !important;
      padding-left: 12px;
    }
    .el-input-group__prepend {
      width: 20px;
      text-align: center;
    }
    .btnSubmit {
      height: 30px;
      width: 100%;
    }
  }
  .captcha {
    cursor: pointer;
    height: 20px;
  }
}
</style>
