<template>
  <div>
    <page-header></page-header>

    <slot>
      <router-view>
      
      </router-view>
    </slot>
  </div>
</template>

<script>
import PageHeader from '@/components/pageHeader';
export default {
  name: 'PageView',
  components: {
    PageHeader
  }
}
</script>
