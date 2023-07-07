<template>
    <div class="sidebar">
        <button class="sidebar-button">New</button>
        <button class="sidebar-button">Change</button>
        <button class="sidebar-button">Search</button>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 50px; /* Adjust the top value to match the height of your navbar */
    left: 0;
    width: 200px;
    height: 100%;
    background-color: #f2f2f2;
    border-right: 5px solid #ccc;
    padding: 10px;
}

.sidebar-button {
    display: block;
    margin-bottom: 10px;
    width: 100%;
    padding: 5px;
}
</style>