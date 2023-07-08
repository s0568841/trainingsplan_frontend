<template>
   <div class="app-container">
      <Navbar></Navbar>
      <Sidebar @show-new-exercise-table="toggleNewExerciseTable"></Sidebar>
      <div class="content-container">
         <router-view></router-view>
         <NewExerciseTable v-if="isShowingNewExerciseTable" :is-visible="isShowingNewExerciseTable" @close-table="closeTable"></NewExerciseTable>
      </div>
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import NewExerciseTable from "@/components/NewExerciseTable.vue";

export default {
   components: {
      Navbar,
      Sidebar,
      NewExerciseTable,
   },
   data() {
      return {
         isShowingNewExerciseTable: false,
      };
   },
   methods: {
      toggleNewExerciseTable(value) {
         this.isShowingNewExerciseTable = value;
      },
      closeTable() {
         this.isShowingNewExerciseTable = false;
      },
   },
};
</script>

<style>
/* Styles for App.vue */
</style>
