<template>
  <div class="account-avatar">
    <a-avatar :size="40" :src="src" :style="{ color: 'white' }" />
    <span class="user-name">{{ name }}</span>
    <a-icon type="alipay-circle" :style="{ fontSize: '20px' }" />
  </div>
</template>
<script>
export default {
  name: "UserInfo",
  props: {
    name: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>
.account-avatar {
  .flex-align(center);
  padding: 0 20px;
  .user-name {
    display: inline-block;
    padding: 0 10px;
  }
  .anticon {
    padding: 0 5px;
  }
  .ant-avatar {
    background: white;
  }
}
</style>