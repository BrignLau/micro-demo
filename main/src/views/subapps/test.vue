<template>
  <div style="height: 100%">
    <micro-app
      name="sub-test"
      url="http://localhost:3001/test/"
      keep-alive
      iframe
      @error="handleError"
    ></micro-app>
  </div>
</template>
<script>
export default {
  name: "subapp-test",
  data() {
    return {};
  },
  methods: {
    handleError() {
      console.log("cardbag 加载出错了");
    },
  },
};
</script>
