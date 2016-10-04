<template>
  <div id="about">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'About page'
    }
  }
};
</script>

<style scoped>
h1 {
  color: green;
} 
</style>