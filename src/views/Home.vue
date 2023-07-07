<template>
    <div>
        <div v-for="exercise in exercises" :key="exercise.id">
            <p><strong>ID:</strong> {{ exercise.id }}</p>
            <p><strong>Exercise Name:</strong> {{ exercise.exerciseName }}</p>
            <p><strong>Weight:</strong> {{ exercise.weight }}</p>
            <p><strong>Repetitions:</strong> {{ exercise.repetitions }}</p>
            <p><strong>Exercise Time:</strong> {{ exercise.exerciseTime }}</p>
            <p><strong>Exercise Date:</strong> {{ exercise.exerciseDate }}</p>
            <p><strong>Fitness Category:</strong> {{ exercise.myFitnessCategory }}</p>
            <hr>
        </div>
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

</style>
