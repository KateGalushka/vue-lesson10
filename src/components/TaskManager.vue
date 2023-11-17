<template>
	<tasks-list/>

	<h2>Розподілені задачі</h2>

	<div class="workers-list__container">
		<workers-list-with-tasks
			v-for="workerData in getSelectedWorkersList"
			:key="workerData.workerId"
			:current-worker="getWorkerById(workerData.workerId)"
			:current-worker-tasks="getTasksByIdList(workerData.tasks)"
		/>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import TasksList from './TasksList.vue';
import WorkersListWithTasks from './WorkersListWithTasks.vue';

	export default {
    name: 'TaskManager',
    components: { TasksList, WorkersListWithTasks },

	 computed: {
		...mapGetters(['getSelectedWorkersList', 'getWorkerById', 'getTasksByIdList']),
	},

}
</script>

<style lang="scss" scoped>
.workers-list__container{
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
}

</style>