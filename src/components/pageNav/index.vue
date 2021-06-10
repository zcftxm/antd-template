<template>
  <a-layout-header class="header" style="background: #fff; padding: 0;z-index:1">
    <div class="page-nav" v-if="menuType != 'sideBar'">
      <div class="page-nav__left">
        <div class="logo" />
        <s-menu v-if="device != 'mobile'" mode="horizontal" :menu="menu"></s-menu>
        <a-icon
          v-else
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleSidebar"
          :style="{ fontSize: '20px' }"
        ></a-icon>
      </div>
      <div class="account-avatar">
        <a-avatar
          :size="40"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <span class="user-name">Michael</span>
        <a-icon type="alipay-circle" :style="{ fontSize: '20px' }" />
      </div>
    </div>
    <div class="flex" v-else>
      <div>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleSidebar"
          :style="{ fontSize: '20px' }"
        ></a-icon>
        <a-icon
          class="trigger"
          :style="{ fontSize: '20px' }"
          type="sync"
          spin
        />
      </div>
      <div class="account-avatar">
        <a-avatar
          :size="40"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          :style="{color:'white' }" 
        />
        <span class="user-name">Michael</span>
        <a-icon type="alipay-circle" :style="{ fontSize: '20px' }" />
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import sMenu from '@/components/Menu';
export default {
  name: "PageNav",
  props: {
    menuType: {
      type: String,
      default: "sideBar",
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Array, 
      default: function() {
        return []
      }
    },
    device: {
      type: String,
      default: "desktop",
    },
  },
  data() {
    return {
      // collapsed: false
    };
  },
  components: {sMenu},
  methods: {
    toggleSidebar() {
      this.$emit("toggle");
    },
  },
};
</script>

<style lang="less" scoped>
.logo {
  width: 100px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  flex-shrink: 0;
}
.flex {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 8%);
}
.page-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #001529;
  .account-avatar {
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: white;
  }
}
.page-nav__left {
  display: flex;
  align-items: center;
  flex: 1 1 calc(~"100vw - 220px");
  width: calc(~"100vw - 220px");
}
.ant-menu.ant-menu-horizontal {
  flex: 1 1 calc(~"100vw - 320px");
  width: calc(~"100vw - 320px");
}
.page-nav__right {
  width: 100px;
  text-align: center;
  color: #fff;
}
.trigger {
  margin-left: 20px;
}
.account-avatar {
  display: flex;
  align-items: center;
  padding: 0 20px;
  .user-name {
    display: inline-block;
    padding: 0 10px;
  }
  .anticon {
    padding: 0 5px;
  }
}
</style>


