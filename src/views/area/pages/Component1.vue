<template>
  <div class="component1">
    <AreaList />
  </div>
</template>

<script>
export default {
  components: {
    AreaList: () => import("../components/AreaList")
  },
};
</script>