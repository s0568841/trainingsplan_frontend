<template>
    <div v-if="isVisible" class="new-exercise-table">
        <h2>New Exercise</h2>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="exerciseName">Exercise Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="exerciseName"
                    v-model="exercise.exerciseName"
                    placeholder="Enter Exercise Name"
                >
            </div>
            <div class="form-group">
                <label for="exerciseWeight">Exercise Weight</label>
                <input
                    type="number"
                    class="form-control"
                    id="exerciseWeight"
                    v-model="exercise.weight"
                    placeholder="Exercise Weight"
                >
            </div>
            <div class="form-group">
                <label for="exerciseRepetitions">Exercise Repetitions</label>
                <input
                    type="number"
                    class="form-control"
                    id="exerciseRepetitions"
                    v-model="exercise.repetitions"
                    placeholder="Exercise Repetitions"
                >
            </div>
            <div class="form-group">
                <label for="exerciseTime">Exercise Time</label>
                <input
                    type="text"
                    class="form-control"
                    id="exerciseTime"
                    v-model="exercise.exerciseTime"
                    placeholder="hh:mm:ss"
                    @blur="validateExerciseTime"
                >
                <p v-if="timeError" class="error-message">Enter the time in the format: HH:mm:ss</p>
            </div>
            <div class="form-group">
                <label for="exerciseDate">Exercise Date</label>
                <input
                    type="text"
                    class="form-control"
                    id="exerciseDate"
                    v-model="exercise.exerciseDate"
                    placeholder="yyyy-mm-dd"
                    @blur="validateDateFormat"
                >
                <p v-if="dateError" class="error-message">Enter the date in the format: yyyy-mm-dd</p>
            </div>
            <div class="form-group">
                <label for="fitnessCategory">Fitness Category</label>
                <select v-model="exercise.myFitnessCategory" class="form-control" id="fitnessCategory">
                    <option value="MACHINE_WORKOUT">Machine Workout</option>
                    <option value="FREE_WEIGHT">Free Weight</option>
                    <option value="GENERAL_FITNESS">General Fitness</option>
                    <option value="NO_STATUS">No Status</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button class="close-button" @click="closeTable">Close</button>
        </form>
        <p v-if="savedExerciseId !== null" class="success-message">
            Exercise saved successfully with the ID: {{ savedExerciseId }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
    },

    data() {
        return {
            exercise: {
                exerciseName: "",
                weight: "",
                repetitions: "",
                exerciseTime: "",
                exerciseDate: "",
                myFitnessCategory: "",
            },
            savedExerciseId: null, // Variable to store the saved exercise ID
            dateError: false, // Flag to track date format error
            timeError: false, // Flag to track time format error
        };
    },

    methods: {
        submitForm(event) {
            // Prevent the form from submitting and page reload
            event.preventDefault();

            // Check if the date format is valid
            if (!this.validateDateFormat()) {
                this.dateError = true;
                return;
            }

            // Create a new Exercise object to send to the backend
            const newExercise = {
                exerciseName: this.exercise.exerciseName,
                weight: parseInt(this.exercise.weight),
                repetitions: parseInt(this.exercise.repetitions),
                exerciseTime: this.exercise.exerciseTime,
                exerciseDate: this.exercise.exerciseDate,
                myFitnessCategory: this.exercise.myFitnessCategory,
            };

            // Send a POST request to your backend API to create a new Exercise
            fetch("http://localhost:8080/Exercise", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newExercise),
            })
                .then((response) => {
                    if (response.ok) {
                        // Successful response
                        console.log("Exercise created successfully");
                        return response.json(); // Extract the response body as JSON
                    } else {
                        // Error response
                        console.error("Failed to create exercise");
                        throw new Error("Failed to create exercise");
                    }
                })
                .then((data) => {
                    // Save the returned exercise ID
                    this.savedExerciseId = data.id;
                    console.log("Exercise ID:", this.savedExerciseId); // Verify the ID value
                    this.closeTable();
                })
                .catch((error) => {
                    console.error("Error occurred while creating exercise", error);
                });
        },

        validateDateFormat() {
            const datePattern = /^\d{4}-\d{2}-\d{2}$/;
            if (!this.exercise.exerciseDate.match(datePattern)) {
                return false;
            }
            return true;
        },
        validateExerciseTime() {
            const timePattern = /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/;
            if (!this.exercise.exerciseTime.match(timePattern)) {
                this.timeError = true;
            } else {
                this.timeError = false;
            }
        },
        closeTable() {
            setTimeout(() => {
                this.$emit("close-table");
            }, 2000);
        },
    },
};
</script>

<style scoped>
.new-exercise-table {
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

.success-message {
    margin-top: 10px;
    color: green;
    display: none;
}

.success-message.visible {
    display: block;
}

.error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
}
</style>