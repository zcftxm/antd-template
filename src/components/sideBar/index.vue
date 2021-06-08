<template>
  <a-layout-sider
    class="sider"
    width="256px"
    v-model="collapsed"
    :trigger="null"
  >
    <div class="logo"></div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']" @select="onSelect">
      <a-sub-menu>
        <span slot="title"><a-icon type="user" />subnav 1</span>
        <a-menu-item key="1">
          option1
        </a-menu-item>
        <a-menu-item key="2">
          option2
        </a-menu-item>
        <a-menu-item key="3">
          option3
        </a-menu-item>
        <a-menu-item key="4">
          option4
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onSelect() {
      // if() {
        this.$emit('select')
      // }
    }
  }
}
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
