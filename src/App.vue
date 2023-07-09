<template>
   <div class="app-container">
      <Navbar></Navbar>
      <Sidebar @show-new-exercise-table="toggleNewExerciseTable" @show-delete-exercise-table="toggleDeleteExerciseTable" @show-update-exercise-table="toggleUpdateExerciseTable"></Sidebar>
      <div class="content-container">
         <router-view v-if="!isComponentActive"></router-view>
         <NewExerciseTable
             v-if="isShowingNewExerciseTable"
             :is-visible="isShowingNewExerciseTable"
             @close-table="closeTable"
         ></NewExerciseTable>
         <DeleteExerciseTable
             v-if="isShowingDeleteExerciseTable"
             @close-table="closeTable"
         ></DeleteExerciseTable>
         <UpdateExerciseTable
             v-if="isShowingUpdateExerciseTable"
             :is-visible="isShowingUpdateExerciseTable"
             @close-table="closeTable"
         ></UpdateExerciseTable>
      </div>
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import NewExerciseTable from "@/components/NewExerciseTable.vue";
import DeleteExerciseTable from "@/components/DeleteExerciseTable.vue";
import UpdateExerciseTable from "@/components/UpdateExerciseTable.vue";

export default {
   components: {
      Navbar,
      Sidebar,
      NewExerciseTable,
      DeleteExerciseTable,
      UpdateExerciseTable,
   },
   data() {
      return {
         isShowingNewExerciseTable: false,
         isShowingDeleteExerciseTable: false,
         isShowingUpdateExerciseTable: false,
         isComponentActive: false, // Flag to determine if any component is active
      };
   },
   methods: {
      toggleNewExerciseTable(value) {
         this.isShowingNewExerciseTable = value;
         this.isComponentActive = value; // Update the flag
      },
      toggleDeleteExerciseTable(value) {
         this.isShowingDeleteExerciseTable = value;
         this.isComponentActive = value; // Update the flag
      },
      toggleUpdateExerciseTable(value) {
         this.isShowingUpdateExerciseTable = value;
         this.isComponentActive = value; // Update the flag
      },
      closeTable() {
         this.isShowingNewExerciseTable = false;
         this.isShowingDeleteExerciseTable = false;
         this.isShowingUpdateExerciseTable = false;
         this.isComponentActive = false; // Reset the flag
      },
   },
};
</script>

<style>
/* Styles for App.vue */
</style>


<style>
/* Styles for App.vue */
</style>