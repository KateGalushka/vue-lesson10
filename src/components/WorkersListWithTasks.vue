<template>
	<div class="workers-list__item">
		<div class="worker-name">{{ currentWorker.name }}</div>
		<ul>
			<li v-for="task in currentWorkerTasks" :key="task.id">
				{{ task.title }}
				<button @click="onDeleteTask(task.id)">X</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapActions } from 'vuex';


	export default {
		name: 'WorkersListWithTasks',

		props: {
			currentWorker: {
				type: Object,
				default: ()=>({})
			},
			currentWorkerTasks: {
				type: Array,
				default:()=>[]
			}
		},
		methods: {
			...mapActions(['deleteTaskFromAssigned']),

			onDeleteTask(taskId) {
				this.deleteTaskFromAssigned({
					taskId: taskId,
					workerId: this.currentWorker.id})
			}
		},
	
	}
</script>

<style lang="scss" scoped>
.workers-list__item{
	border: 3px solid #000;
	padding: 10px;
	button{
		color: red;
		border: 1px solid red;
		cursor: pointer;
	}
}
.worker-name{
	font-size: 1.1rem;
	font-weight: bold;
	border: 2px solid #000;
	text-align: center;
	padding: 10px;
}

</style>