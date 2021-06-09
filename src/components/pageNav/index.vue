<template>
  <a-layout-header class="header" style="background: #fff; padding: 0">
    <div class="page-nav" v-if="mode !== 'SiderBar'">
      <div class="page-nav__left">
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="mail">
            <a-icon type="mail" />Navigation One
          </a-menu-item>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper"
              ><a-icon type="setting" />Navigation Three - Submenu</span
            >
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1"> Option 1 </a-menu-item>
              <a-menu-item key="setting:2"> Option 2 </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
        </a-menu>
      </div>
      <!-- <div class="page-nav__right">用户</div> -->
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
      <!-- <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      ></a-icon> -->
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: "PageNav",
  props: {
    mode: {
      type: String,
      default: "SiderBar",
    },
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // collapsed: false
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle");
    },
  },
};
</script>

<style lang="less" scoped>
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


