<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>

<script>
import { AppDeviceEnquire } from '@/utils/mixins';
import { mapActions } from 'vuex';
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
  name: 'App',
  data() {
    return {
      locale: zhCN,
    }
  },
  mixins: [AppDeviceEnquire],
  mounted() {
    this.getMenus()
  },
  methods: {
    ...mapActions(['getMenus'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
