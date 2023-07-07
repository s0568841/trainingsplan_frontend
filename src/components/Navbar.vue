<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <div class="navbar-brand">Exercise Plan</div>
            <div class="navbar-collapse justify-content-end">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style scoped>
.navbar-nav {
    margin-left: auto; /* Push the navbar links to the right */
}

.nav-item {
    margin-left: 10px; /* Add spacing between navbar links */
}
</style>