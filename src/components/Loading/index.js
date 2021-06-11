import LoadingComponent from './index.vue';
let $vm;
export default {
  install(Vue) {
    if (!$vm) {
      const LoadingPlugin = Vue.extend(LoadingComponent);
      $vm = new LoadingPlugin({});
      document.body.appendChild($vm.$mount().$el);
    }

    $vm.show = true;
    let loading = {
      show() {
        $vm.show = true
      },
      hide() {
        $vm.show = false
      }
    }
    if (!Vue.$loading) {
      Vue.$loading = loading;
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading;
      }
    })
  }
}