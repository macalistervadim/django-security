<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader/AppHeader.vue';
import AppFooter from './components/AppFooter/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
}
</style>
