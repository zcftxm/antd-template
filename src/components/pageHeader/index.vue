<template>
  <div class="page-header">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in titleList" :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link>
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
      titleList: [],
    };
  },
  watch: {
    $route: {
      handler(to) {
        // let list = [];
        this.titleList = to.matched.map((item) => {
          let obj = {};
          obj.name = item.meta.title;
          obj.path = item.path;
          return obj
        });
        // this.titleList = list;
      },
      immediate: true
    },
  },
  mounted() {
  },
};
</script>
<style lang="less" scoped>
.page-header {
  .flex-justify(center);
  .flex-direction(column);
  background: white;
  height: 40px;
  padding-left: 20px;
  .ant-breadcrumb {
    font-size: 16px;
    text-align: left;
  }
}
</style>
