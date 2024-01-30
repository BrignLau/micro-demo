<template>
  <div>
    <button @click="test()">切换子应用</button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      this.$router.push("/subapp/test/about");
    },
  },
};
</script>
