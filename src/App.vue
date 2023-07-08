<template>
   <div class="app-container">
      <Navbar></Navbar>
      <Sidebar @show-new-exercise-table="toggleNewExerciseTable" @show-delete-exercise-table="toggleDeleteExerciseTable"></Sidebar>
      <div class="content-container">
         <router-view></router-view>
         <NewExerciseTable
             v-if="isShowingNewExerciseTable"
             :is-visible="isShowingNewExerciseTable"
             @close-table="closeTable"
         ></NewExerciseTable>
         <DeleteExerciseTable
             v-if="isShowingDeleteExerciseTable"
             @close-table="closeTable"
         ></DeleteExerciseTable>
      </div>
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import NewExerciseTable from "@/components/NewExerciseTable.vue";
import DeleteExerciseTable from "@/components/DeleteExerciseTable.vue";

export default {
   components: {
      Navbar,
      Sidebar,
      NewExerciseTable,
      DeleteExerciseTable,
   },
   data() {
      return {
         isShowingNewExerciseTable: false,
         isShowingDeleteExerciseTable: false,
      };
   },
   methods: {
      toggleNewExerciseTable(value) {
         this.isShowingNewExerciseTable = value;
      },
      toggleDeleteExerciseTable(value) {
         this.isShowingDeleteExerciseTable = value;
      },
      closeTable() {
         this.isShowingNewExerciseTable = false;
         this.isShowingDeleteExerciseTable = false;
      },
   },
};
</script>

<style>
/* Styles for App.vue */
</style>
