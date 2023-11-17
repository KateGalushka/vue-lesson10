<template>
	<div class="task__container">
		{{ taskItem.title }}
		<select v-model="selectedWorker">
			<option value="" disabled selected>Вибрати відповідального</option>
			<option v-for="worker in workers" :key="worker.id" :value="worker.id"
			>
				{{ worker.name }}
			</option>
		</select>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'TaskItem',
		props: {
			taskItem: {
				type: Object,
				required: true
			},
			workers:{
				type: Array,
				default:()=>[]
			}
		},
		
		emits:['selectWorker'],

		data() {
			return {
				selectedWorkerValue: null
			}
		},
		computed: {
			...mapGetters(['getSelectedWorkersList']), 

			selectedWorker: {
				get(){
					return this.selectedWorkerValue;
				},
				set(workerId){
					this.selectedWorkerValue = workerId;
					this.addWorkerToSelectedList({
						workerId: workerId,
						tasks: [this.taskItem.id]
					});
				}
			}
		},
	
		methods: {
			...mapActions(['addWorkerToSelectedList']),

		},
		
		
	}
</script>

<style lang="scss" scoped>
.task__container{
	display: flex;
	justify-content: space-between;
	max-width: 50vw;
	margin-bottom: 10px;
}

</style>