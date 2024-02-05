<template>
  <div>
    <button @click="toHome()">切换主应用</button>
    <button @click="test()">切换子应用</button>
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
  },
};
</script>
