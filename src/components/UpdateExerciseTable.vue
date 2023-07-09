<template>
    <div v-if="isVisible" class="update-exercise-table">
        <h2>Update Exercise</h2>
        <form @submit.prevent="fetchExercise">
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
            <button type="submit" class="btn btn-primary">Fetch Exercise</button>
        </form>
        <div v-if="exerciseData">
            <form @submit.prevent="updateExercise">
                <!-- Update Exercise form fields here -->
                <div class="form-group">
                    <label for="exerciseName">Exercise Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exerciseName"
                        v-model="updatedExercise.exerciseName"
                        placeholder="Enter Exercise Name"
                    >
                </div>
                <div class="form-group">
                    <label for="exerciseWeight">Exercise Weight</label>
                    <input
                        type="number"
                        class="form-control"
                        id="exerciseWeight"
                        v-model="updatedExercise.weight"
                        placeholder="Exercise Weight"
                    >
                </div>
                <div class="form-group">
                    <label for="exerciseRepetitions">Exercise Repetitions</label>
                    <input
                        type="number"
                        class="form-control"
                        id="exerciseRepetitions"
                        v-model="updatedExercise.repetitions"
                        placeholder="Exercise Repetitions"
                    >
                </div>
                <div class="form-group">
                    <label for="exerciseTime">Exercise Time</label>
                    <input
                        type="text"
                        class="form-control"
                        id="exerciseTime"
                        v-model="updatedExercise.exerciseTime"
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
                        v-model="updatedExercise.exerciseDate"
                        placeholder="Exercise Date"
                    >
                </div>
                <div class="form-group">
                    <label for="fitnessCategory">Fitness Category</label>
                    <select
                        class="form-control"
                        id="fitnessCategory"
                        v-model="updatedExercise.myFitnessCategory"
                    >
                        <option value="MACHINE_WORKOUT" :selected="exerciseData.myFitnessCategory === 'MACHINE_WORKOUT'">
                            Machine Workout
                        </option>
                        <option value="FREE_WEIGHT" :selected="exerciseData.myFitnessCategory === 'FREE_WEIGHT'">
                            Free Weight
                        </option>
                        <option value="GENERAL_FITNESS" :selected="exerciseData.myFitnessCategory === 'GENERAL_FITNESS'">
                            General Fitness
                        </option>
                        <option value="NO_STATUS" :selected="exerciseData.myFitnessCategory === 'NO_STATUS'">
                            No Status
                        </option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
                <button class="close-button" @click="closeTable">Close</button>
            </form>
        </div>
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
            exerciseId: "",
            exerciseData: null,
            updatedExercise: {
                exerciseName: "",
                weight: "",
                repetitions: "",
                exerciseTime: "",
                exerciseDate: "",
                myFitnessCategory: "",
            },
            timeError: false,
            isExerciseUpdated: false,
        };
    },
    methods: {
        fetchExercise() {
            // Fetch the exercise data by ID from your backend API
            fetch(`http://localhost:8080/Exercise/${this.exerciseId}`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.error("Failed to fetch exercise");
                        throw new Error("Failed to fetch exercise");
                    }
                })
                .then((data) => {
                    // Save the fetched exercise data
                    this.exerciseData = data;
                    this.updatedExercise = { ...data };
                })
                .catch((error) => {
                    console.error("Error occurred while fetching exercise", error);
                });
        },
        updateExercise() {
            if (!this.validateExerciseTime()) {
                this.timeError = true;
                return;
            }
            // Send a PUT request to update the exercise
            fetch(`http://localhost:8080/Exercise/${this.exerciseId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.updatedExercise),
            })
                .then((response) => {
                    if (response.ok) {
                        console.log("Exercise updated successfully");
                        this.isExerciseUpdated = true;
                    } else {
                        console.error("Failed to update exercise");
                        throw new Error("Failed to update exercise");
                    }
                })
                .catch((error) => {
                    console.error("Error occurred while updating exercise", error);
                });
        },
        validateExerciseTime() {
            const timePattern = /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/;
            if (!this.updatedExercise.exerciseTime.match(timePattern)) {
                return false;
            }
            return true;
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
.update-exercise-table {
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