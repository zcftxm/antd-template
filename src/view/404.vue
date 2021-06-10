<template>
  <div class="example" :style="{ height: screenHeight + 'px' }">
    <a-spin size="large" tip="Loading...">
      <div class="spin-content">该页面不存在</div>
    </a-spin>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenHeight: window.innerHeight,
    };
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        that.screenHeight = window.innerHeight;
      })();
    };
  },
};
</script>

<style lang="less" scoped>
.example {
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  .spin-content{
      background: rgba(0, 0, 0, 0.05);
      font-size: 24px;
  }
  //   margin-bottom: 20px;
  //   padding: 30px 50px;
  //   margin: 20px 0;
}
</style>

