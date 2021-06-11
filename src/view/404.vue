<template>
  <div class="example">
    <a-spin size="large" tip="Loading...">
      <div class="spin-content">该页面不存在</div>
    </a-spin>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.example {
  .flex-auto();
  height: 100vh;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  .spin-content{
    background: rgba(0, 0, 0, 0.05);
    font-size: 24px;
  }
}
</style>

