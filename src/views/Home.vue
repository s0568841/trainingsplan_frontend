<template>
    <h1>Trainingsplan</h1>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import {onMounted} from "vue";
export default {
    name: "Home.vue",
    data () {
        return {
            exercise: [

            ]
        }
    },
    methods: {

    },
    mounted() {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }

        fetch('http://localhost:8080/Exercise/4', requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
    }
}
</script>

<style scoped>

</style>