<template>
  <div>
    <page-header>
      <div class="title">{{this.$route.meta.title}}</div>
    </page-header>
    <slot>
      <router-view></router-view>
    </slot>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: "PageView",
  components: {
    PageHeader
  }
};
</script>
<style lang="less" scoped>
.title {
  text-align: left;
  font-size: 18px;
}
</style>
