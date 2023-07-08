<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <div class="exercise-plan-link">
                <router-link class="navbar-brand" to="/">Exercise Plan</router-link>
            </div>
            <div class="sidebar-container">
                <div class="navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
</script>

<style scoped>
/* Add any custom styles for your navbar */
.exercise-plan-link {
    margin-right: auto; /* Push the "Exercise Plan" link to the right */
}

.sidebar-container {
    display: flex;
    align-items: center;
}

.search-bar {
    margin-left: auto; /* Push the search bar to the right */
    display: flex;
    align-items: center;
}

.search-input {
    padding: 5px;
    margin-right: 5px;
}

.search-button {
    padding: 5px;
}
</style>
