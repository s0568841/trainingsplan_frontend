
<template>
   <div>
      <navbar></navbar> <!-- Add the navbar component -->
      <router-view></router-view> <!-- Add the router view for rendering the current route -->
   </div>
</template>


<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

