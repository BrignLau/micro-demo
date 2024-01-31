<template>
  <div>主应用 HOME</div>
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
