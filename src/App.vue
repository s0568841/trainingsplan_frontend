<template>
   <div class="app-container">
      <navbar></navbar>
      <sidebar></sidebar>
      <div class="content-container">
         <router-view></router-view>
      </div>
   </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<style>
.app-container {
   height: 100vh;
   display: flex;
   flex-direction: column;
}

.content-container {
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
