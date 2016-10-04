<template>
  <div id="increment">
    <button @click='incrementCounter'>Increment +1</button>
  </div>
</template>

<script>
export default {
  name: 'Increment',
  methods: {
    incrementCounter(...args) {
      this.$store.dispatch('incrementCounter', ...args);
    }
  }
};
</script>