<template>
  <div id="display">
    <!-- 
      Same as {{ $store.state.count }} 
      or {{ $store.getters.getCount }}
    -->
    <h1>Count is {{ counterValue }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    counterValue() {
      return this.$store.getters.getCount;
    }
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
