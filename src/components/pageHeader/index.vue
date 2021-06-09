<template>
  <div class="page-header">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item,index) in titleList" :key="index">{{item}}</a-breadcrumb-item>
      <!-- <a-breadcrumb-item>List</a-breadcrumb-item>
      <a-breadcrumb-item>App</a-breadcrumb-item> -->
    </a-breadcrumb>
    <div class="page-detail">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  // props: {}
  data() {
    return {
      titleList:[]
      // collapsed: false
    };
  },
  mounted(){
    let list =[]
    this.$route.matched.forEach(item => {
      list.push(item.meta.title)
    });
    console.log(list)
    this.titleList = list
  }
}
</script>
<style lang="less" scoped>
.page-header{
  background: white;
  height: 40px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  .ant-breadcrumb{
    font-size: 16px;
  }
}
</style>
