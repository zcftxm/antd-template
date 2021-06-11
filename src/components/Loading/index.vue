<template>
  <div class="overlay" v-show="show">
    <div class="wrapper">
      <a-spin size="large" tip="Loading..."></a-spin>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
.overlay {
  .flex-auto();
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(10, 10, 10, 0.1);
  .wrapper {
    .flex-auto();
    .flex-direction(column);
    width: 120px;
    height: 120px;
    font-size: 20px;
    color: #fff;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
}

</style>


