<template>
  <div id="app">
    <s-button @click="buttonClick">hello</s-button>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
export default Vue.extend({
  name: 'App',
  methods: {
    buttonClick(e) {
      console.log(e);
    }
  }
});
</script>


<style lang='scss'>
#app {
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
</style>
