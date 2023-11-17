<template>
	<h2>Задачі</h2>
	<task-item
		v-for="task in getTasksList"
		:key="task.id"
		:task-item="task" 
		:workers="getWorkersList"
	 />
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import {workers, tasks} from '../data/tasks_divider'
	import TaskItem from './TaskItem.vue'

	export default {
		name: 'TasksList',
		components: { TaskItem },
		
		computed: {
			...mapGetters(['getTasksList', 'getWorkersList']) 
		},

		created() {
			this.loadTasksList(tasks);
			this.loadWorkersList(workers)
		},

		methods: {
			...mapActions(['loadWorkersList', 'loadTasksList', 'addWorkerToSelectedList']),
		},

	}
</script>

<style lang="scss" scoped>

</style>