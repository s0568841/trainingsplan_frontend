<template>
    <div>
        <div class="search-bar">
            <input type="text" placeholder="Search..." class="search-input" v-model="searchId" />
            <button class="search-button" @click="searchExercise">Search</button>
        </div>

        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

        <div v-else>
            <div v-if="exercise">
                <h2>{{ exercise.exerciseName }}</h2>

                <table class="table">
                    <tbody>
                    <tr>
                        <th>Weight</th>
                        <td>{{ exercise.weight }}</td>
                    </tr>
                    <tr>
                        <th>Repetitions</th>
                        <td>{{ exercise.repetitions }}</td>
                    </tr>
                    <tr>
                        <th>Exercise Time</th>
                        <td>{{ exercise.exerciseTime }}</td>
                    </tr>
                    <tr>
                        <th>Exercise Date</th>
                        <td>{{ exercise.exerciseDate }}</td>
                    </tr>
                    <tr>
                        <th>Fitness Category</th>
                        <td>{{ exercise.myFitnessCategory }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div v-else-if="isLoading">Loading exercise data...</div>

            <div v-else>No exercise found.</div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "Home",
    data() {
        return {
            exercise: null,
            searchId: "",
            errorMessage: "",
            isLoading: false,
        };
    },
    methods: {
        searchExercise() {
            this.isLoading = true;
            this.errorMessage = "";

            const requestOptions = {
                method: "GET",
                redirect: "follow",
            };

            fetch(`http://localhost:8080/Exercise/${this.searchId}`, requestOptions)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("This exercise does not exist");
                    }
                })
                .then((result) => {
                    this.exercise = result;
                })
                .catch((error) => {
                    this.exercise = null;
                    this.errorMessage = error.message;
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
    },
};
</script>


<style scoped>
.table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid black;
    padding: 8px;
}

th {
    text-align: left;
    background-color: #f2f2f2;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
