<template>
  <a-layout-header class="header" style="background: #fff; padding: 0">
    <div class="page-nav" v-if="mode != 'SiderBar'">
      <div class="page-nav__left">
        <div class="logo" />
        <!-- <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            nav 1
          </a-menu-item>
          <a-menu-item key="2">
            nav 2
          </a-menu-item>
          <a-menu-item key="3">
            nav 3
          </a-menu-item>
        </a-menu> -->
        <s-menu mode="horizontal" :menu="menus"></s-menu>
      </div>
      <div class="page-nav__right">用户</div>
    </div>
    <div class="flex" v-else>
      <a-icon 
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="toggleSidebar"  
      ></a-icon>
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      ></a-icon>
    </div>
    
  </a-layout-header>
</template>

<script>
import sMenu from '@/components/Menu';
export default {
  name: 'PageNav',
  props: {
    mode: {
      type: String,
      default: 'SiderBar'
    }
  },
  data() {
    return {
      collapsed: false
    }
  },
  components: {sMenu},
  methods: {
    toggleSidebar() {
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="less" scoped>
.flex {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #001529;
}
.page-nav__right {
  width: 100px;
  text-align: center;
  color: #fff;
}
</style>


