<template>
   <div class="app-container">
      <Navbar></Navbar>
      <Sidebar
          @show-new-exercise-table="toggleNewExerciseTable"
          @show-update-exercise-table="toggleUpdateExerciseTable"
          @show-delete-exercise-table="toggleDeleteExerciseTable"
      ></Sidebar>
      <div class="content-container">
         <router-view></router-view>
         <NewExerciseTable
             v-if="isShowingNewExerciseTable"
             :is-visible="isShowingNewExerciseTable"
             @close-table="closeTable"
         ></NewExerciseTable>
         <UpdateExerciseTable
             v-if="isShowingUpdateExerciseTable"
             :is-visible="isShowingUpdateExerciseTable"
             :exercise-id="selectedExerciseId"
             @close-table="closeTable"
         ></UpdateExerciseTable>
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
import UpdateExerciseTable from "@/components/UpdateExerciseTable.vue";
import DeleteExerciseTable from "@/components/DeleteExerciseTable.vue";

export default {
   components: {
      Navbar,
      Sidebar,
      NewExerciseTable,
      UpdateExerciseTable,
      DeleteExerciseTable,
   },
   data() {
      return {
         isShowingNewExerciseTable: false,
         isShowingUpdateExerciseTable: false,
         isShowingDeleteExerciseTable: false,
         selectedExerciseId: null,
      };
   },
   methods: {
      toggleNewExerciseTable(value) {
         this.isShowingNewExerciseTable = value;
      },
      toggleUpdateExerciseTable(value) {
         this.isShowingUpdateExerciseTable = value;
      },
      toggleDeleteExerciseTable(value) {
         this.isShowingDeleteExerciseTable = value;
      },
      closeTable() {
         this.isShowingNewExerciseTable = false;
         this.isShowingUpdateExerciseTable = false;
         this.isShowingDeleteExerciseTable = false;
         this.selectedExerciseId = null;
      },
   },
};
</script>

<style>
/* Styles for App.vue */
</style>
