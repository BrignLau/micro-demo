<template>
  <div>
    <button @click="toHome()">切换主应用</button>
    <button @click="test()">切换子应用Home</button>
    <button @click="testAbout()">切换子应用About</button>
  </div>
  <router-view />
</template>

<script>
export default {
  methods: {
    test() {
      this.$router.push("/subapp/test/");
    },
    toHome() {
      this.$router.push("/");
    },
    testAbout() {
      this.$router.push("/subapp/test/about");
    },
  },
};
</script>
