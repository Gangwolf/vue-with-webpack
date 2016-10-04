<template>
  <div id="decrement">
    <button @click='decreaseCount'>Decrement -1</button>
  </div>
</template>

<script>
export default {
  name: 'Decrement',
  methods: {
    decreaseCount(...args) {
      this.$store.dispatch('decrementCounter', ...args);
    }
  }
};
</script>
