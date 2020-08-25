<template>
  <el-container class="app-container" id="app-container" direction="vertical">
    <div class="app-main" style="height:100%;margin-top: -0.2%;z-index: 999; pointer-events: none;">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  name: "Container",
  componentName: "Container",
  methods: {
    formatQueryCode(code) {
      let title;
      this.$store.state.base.queryDesign.forEach((value, index) => {
        if (value.queryname === code) title = value.querytitle;
      });
      return title;
    },
  },
  watch: {
    $route(to, from) {
      if (to.path == "/") {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
