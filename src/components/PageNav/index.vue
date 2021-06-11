<template>
  <a-layout-header
    class="header"
    style="background: #fff; padding: 0; z-index: 1"
  >
    <div class="page-nav" v-if="menuType != 'sideBar'">
      <div class="page-nav__left">
        <page-logo />
        <Menu
          v-if="device != 'mobile'"
          mode="horizontal"
          :menu="menu"
        ></Menu> 
        <a-icon
          v-else
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleSidebar"
          :style="{ fontSize: '20px', color: '#fff' }"
        ></a-icon>
      </div>
      <user-info :name="name" :src="src" class="account-avatar" />
    </div>
    <div class="page-flex" v-else>
      <div>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleSidebar"
          :style="{ fontSize: '20px' }"
        ></a-icon>
      </div>
      <userInfo :name="name" :src="src" />
    </div>
  </a-layout-header>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import Menu from "@/components/Menu";
import PageLogo from "@/components/PageLogo";
export default {
  name: "PageNav",
  props: {
    menuType: {
      type: String,
      default: "sideBar"
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    menu: {
      type: Array,
      default: function() {
        return [];
      }
    },
    device: {
      type: String,
      default: "desktop"
    }
  },
  data() {
    return {
      name: "Michael",
      src: require("../../assets/logo.png")
    };
  },
  components: { Menu, UserInfo, PageLogo },
  methods: {
    toggleSidebar() {
      this.$emit("toggle");
    }
  }
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
.page-flex {
  .flex-auto(space-between);
  height: 100%;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 8%);
}
.page-nav {
  .flex-auto(space-between);
  background: #001529;
  .account-avatar {
    .flex-align("center");
    padding: 0 20px;
    color: white;
  }
}
.page-nav__left {
  display: flex;
  .flex-align(center);
  flex: 1 1 calc(~"100vw - 220px");
  width: calc(~"100vw - 220px");
}
.ant-menu.ant-menu-horizontal {
  .flex();
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
  .flex-align(center);
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


