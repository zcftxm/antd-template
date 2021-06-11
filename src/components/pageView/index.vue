<template>
  <div>
    <page-header></page-header>
    <div class="page-detail">{{detail}}</div>
    <slot>
      <router-view></router-view>
    </slot>
  </div>
</template>

<script>
import PageHeader from "@/components/pageHeader";
export default {
  name: "PageView",
  components: {
    PageHeader,
  },
  data(){
    return{
      detail:this.$route.meta.title
    }
  },
  watch:{
    $route(to){
      this.detail = to.meta.title
    }
  }

};
</script>
<style lang="less" scoped>
.page-detail {
  background: white;
  height: 40px;
  // line-height: 30px;
  padding-left: 20px;
  font-size: 20px;
  text-align: left;
}
</style>
