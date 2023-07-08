<template>
    <div class="sidebar">
        <button @click="showNewExerciseTable" class="sidebar-button">New</button>
        <button @click="showDeleteExerciseTable" class="sidebar-button">Delete</button>
        <button class="sidebar-button">Change</button>
    </div>
</template>

<script>
export default {
    methods: {
        showNewExerciseTable() {
            this.$emit("show-new-exercise-table", true);
        },
        showDeleteExerciseTable() {
            this.$emit("show-delete-exercise-table", true);
        },
    },
};
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 50px; /* Adjust the top value to match the height of your navbar */
    left: 0;
    width: 200px;
    height: 100%;
    background-color: #f2f2f2;
    border-right: 5px solid #ccc;
    padding: 10px;
}

.sidebar-button {
    display: block;
    margin-bottom: 10px;
    width: 100%;
    padding: 5px;
}
</style>
