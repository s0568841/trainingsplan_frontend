<template>
    <div class="delete-exercise-table">
        <h2>Delete Exercise</h2>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="exerciseId">Exercise ID</label>
                <input
                        type="text"
                        class="form-control"
                        id="exerciseId"
                        v-model="exerciseId"
                        placeholder="Enter Exercise ID"
                >
            </div>
            <button type="submit" class="btn btn-primary">Delete</button>
            <button class="close-button" @click="closeTable">Close</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            exerciseId: "",
        };
    },
    methods: {
        submitForm() {
            // Perform form submission logic here
            // Send a DELETE request to your backend API to delete the exercise

            fetch(`http://localhost:8080/Exercise/${this.exerciseId}`, {
                method: "DELETE",
            })
                .then((response) => {
                    if (response.ok) {
                        // Successful response
                        console.log(`Exercise with ID ${this.exerciseId} deleted successfully`);
                        // Perform any additional actions if needed
                    } else {
                        // Error response
                        console.error(`Failed to delete exercise with ID ${this.exerciseId}`);
                        throw new Error(`Failed to delete exercise with ID ${this.exerciseId}`);
                    }
                })
                .catch((error) => {
                    console.error("Error occurred while deleting exercise", error);
                });

            this.closeTable();
        },
        closeTable() {
            this.$emit("close-table");
        },
    },
};
</script>

<style scoped>
.delete-exercise-table {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border: 1px solid black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 9999;
}

.form-group {
    margin-bottom: 10px;
}

.close-button {
    margin-top: 10px;
    padding: 5px 10px;
}
</style>
