<template>
    <div>
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

        <div v-else>
            Loading exercise data...
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
    name: "Home.vue",
    data() {
        return {
            exercise: null,
        };
    },
    mounted() {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };
        fetch("http://localhost:8080/Exercise/4", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                this.exercise = result;
            })
            .catch((error) => console.log("error", error));
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
