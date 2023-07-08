<template>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Exersice Name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Exersice Name">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">weight</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="weight">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Repititions</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Repititions">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Exercise Time</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Exercise Time">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Exercise Date</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Exercise Date">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Fitness Category</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Fitness Category">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
export default {
    name: "About.vue"
}
</script>

<style scoped>

</style>