<template>
  <div class="main">
    <a-list
      :grid="{ gutter: 16, xs: 1, sm: 2,  xl: 3,}"
      :data-source="data"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card :title="item.title"> Card content </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
];
export default {
  data() {
    return {
      data,
    };
  },
};
</script>
<style lang="less" scoped>
.main{
  padding: 20px;
  box-sizing: border-box;
}
</style>
