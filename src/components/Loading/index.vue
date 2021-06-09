<template>
  <div class="overlay" v-show="show">
    <div class="wrapper">
      <a-spin tip="Loading..."></a-spin>
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(10, 10, 10, 0.2);
  .wrapper {
    background: rgba(0, 0, 0, 0.1);
    width: 120px;
    height: 120px;
    font-size: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
  }
}

</style>


