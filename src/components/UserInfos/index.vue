<template>
  <div class="account-avatar" :class="[isMobile ? 'account-avatar-mobile' : '']">
    <a-dropdown>
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        <div class="user-info">
          <a-avatar :size="40" :src="src" :style="{ color: 'white' }" />
          <span class="user-name">{{ name }}</span>
        </div>
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-dropdown>
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        <div class="icon">
          <a-icon type="alipay-circle" :style="{ fontSize: '20px' }" />
        </div>
      </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
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
      required: true,
    },
  },
  data(){
    return{
      isMobile : false
    }
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
  mounted() {
    if (this._isMobile()) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  },
};
</script>
<style lang="less" scoped>
.account-avatar-mobile{
    padding: 0 !important;
}
.account-avatar {
  display: flex;
  align-items: center;

  .user-info {
    padding: 0 20px;
    transition: all 1s ease;
    display: flex;
    align-items: center;
    .ant-avatar {
      background: white;
    }
    .user-name {
      display: inline-block;
      padding: 0 10px;
    }
  }
  .user-info:hover {
    background: lightgray;
  }
  .icon {
    padding: 0 10px;
    transition: all 1s ease;
  }
  .icon:hover {
    background: lightgray;
  }
}
</style>