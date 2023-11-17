<template>
	<task-manager/>
</template>

<script>
import TaskManager from './components/TaskManager.vue';

export default {
    name: 'App',
    components: { TaskManager },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
