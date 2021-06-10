<template>
  <div class="page-header">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in titleList" :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div class="page-detail"><slot></slot>{{ detail }}</div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      titleList: [],
      detail: ""
    };
  },
  watch: {
    $route(to) {
      let list = [];
      this.detail = to.meta.title;
      to.matched.forEach((item) => {
        let obj = {};
        obj.name = item.meta.title;
        obj.path = item.path;
        list.push(obj);
      });
      this.titleList = list;
    },
  },
  mounted() {
    let list =[]
    this.detail = this.$route.meta.title
    this.$route.matched.forEach(item => {
      let obj = {}
      obj.name = item.meta.title
      obj.path = item.path
      list.push(obj)
    });
    this.titleList = list
  },
};
</script>
<style lang="less" scoped>
.page-header {
  background: white;
  height: 70px;
  padding-left: 20px;
  display: flex;
  // align-items: center;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  .ant-breadcrumb {
    font-size: 16px;
  }
  .page-detail {
    font-size: 24px;
  }
}
</style>
