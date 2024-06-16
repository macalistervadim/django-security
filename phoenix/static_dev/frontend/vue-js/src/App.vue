<template>
  <div id="app">
    <ProfileList />
  </div>
</template>

<script>
import ProfileList from './components/ProfileList.vue';

export default {
  name: 'App',
  components: {
    ProfileList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
