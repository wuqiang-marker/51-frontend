<template>
  <Container />
</template>
<script>
import Vue from "vue";
import { Loading } from "element-ui";
import Container from "@/views/modules/layout/Container";
import Home from "@/views/Home.vue";
import { mapState, mapMutations } from "vuex";
export default {
  components: { Container },
  created() {},
  methods: {},
  mounted() {
    let that = this;
    let loading = Loading.service({
      lock: true,
      text: "服务器连接中...",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.1)"
    });
    loading.close();
  }
};
</script>


