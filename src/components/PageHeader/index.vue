<template>
  <div class="page-header">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in matched" :key="index">
        <router-link :to="item.path">{{ item.meta.title }}</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div class="page-detail"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      matched: this.$route.matched
    };
  }
};
</script>
<style lang="less" scoped>
.page-header {
  .flex-justify(center);
  .flex-direction(column);
  background: white;
  padding: 10px 20px;
  .ant-breadcrumb {
    font-size: 16px;
    text-align: left;
  }
}
</style>
