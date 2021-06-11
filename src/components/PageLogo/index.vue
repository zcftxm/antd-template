<template>
  <div class="logo" :class="[!image ? 'icon' : '']">
    <img class="logo-img" v-if="image" :src="image" alt="" />
  </div>
</template>
<script>
export default {
  name: "PageLogo",
  props: {
    image: String
  }
};
</script>
<style lang="less" scoped>
.logo {
  width: 100px;
  height: 32px;
  margin: 16px;
  flex-shrink: 0;
}
.icon {
  background: rgba(255, 255, 255, 0.2);
}
.logo-img {
  height: 100%;
  width: 100%;
  display: block;
}
</style>