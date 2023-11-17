import { createStore } from 'vuex'

export default createStore({
    state: {
		tasksList: [],
		workersList: [],
		selectedWorkersList: [],
	 },
    getters: {
		 getTasksList: ({ tasksList }) => tasksList,
		 getWorkersList: ({ workersList }) => workersList,
		 getSelectedWorkersList: ({ selectedWorkersList }) => selectedWorkersList,
		 getWorkerById: (state)=>(workerId)=>state.workersList.find(worker => worker.id == workerId),
		 getTasksByIdList: (state)=>(tasks)=>state.tasksList.filter(task => tasks.includes(task.id))
	 },
    mutations: {
		 setWorkersList(state, workers){
			state.workersList = workers
		 },
		 setTasksList(state, tasks){
			state.tasksList = tasks
		 },
		 addWorkerToSelectedList(state, workerData){
			 const selectedWorker = state.selectedWorkersList.find(worker=>worker.workerId == workerData.workerId);
			 if (selectedWorker) {
				selectedWorker.tasks.push(...workerData.tasks);
			 } else {
				 state.selectedWorkersList.push({
					workerId: workerData.workerId,
					tasks: workerData.tasks
				 });
			 };
		 },
		 deleteTask(state, selectedObj){
			let {taskId, workerId} = selectedObj;
			 console.log('taskId: ', taskId);
			 console.log('workerId: ', workerId);
			 const selectedWorker = state.selectedWorkersList.find(item=>item.workerId == workerId);
			 console.log('selectedWorker: ', selectedWorker);
			 
			 selectedWorker.tasks = selectedWorker.tasks.filter(id =>id !==taskId);
			 if (selectedWorker.tasks.length == 0){
				state.selectedWorkersList= state.selectedWorkersList.filter(workerData=>workerData.workerId !== workerId)
			 }
		 }
	
		 
	 },
    actions: {
		loadWorkersList({commit}, workers){
			 commit('setWorkersList', workers)
		 },
		loadTasksList({commit}, tasks){
			commit('setTasksList', tasks)
		},
		 addWorkerToSelectedList({ commit }, workerData){
			 commit('addWorkerToSelectedList', workerData)
		 },
		 deleteTaskFromAssigned({ commit }, selectedObj){
			commit('deleteTask', selectedObj);
		 }
		

	 },
    modules: {},
})
