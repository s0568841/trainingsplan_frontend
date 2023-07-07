<template>
    <div>
        <h2>{{ exercises[0].exerciseName }}</h2>

        <table class="table">
            <tbody>
            <tr>
                <th>Weight</th>
                <td>{{ exercises[0].weight }}</td>
            </tr>
            <tr>
                <th>Repetitions</th>
                <td>{{ exercises[0].repetitions }}</td>
            </tr>
            <tr>
                <th>Exercise Time</th>
                <td>{{ exercises[0].exerciseTime }}</td>
            </tr>
            <tr>
                <th>Exercise Date</th>
                <td>{{ exercises[0].exerciseDate }}</td>
            </tr>
            <tr>
                <th>Fitness Category</th>
                <td>{{ exercises[0].myFitnessCategory }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import { onMounted } from "vue";
export default {
    name: "Home.vue",
    data() {
        return {
            exercises: [],
        };
    },
    methods: {},
    mounted() {
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("http://localhost:8080/Exercise/4", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result); // Debug: Log the result from the backend
                this.exercises = [result]; // Wrap the result in an array for iteration
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

th, td {
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
