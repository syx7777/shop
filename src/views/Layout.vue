<template>
    <div class="home">
      <HeaderNav/>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  import HeaderNav from '@/components/HeaderNav.vue';
  
  export default {
    name: 'Layout',
    components:{HeaderNav}
  }
  </script>