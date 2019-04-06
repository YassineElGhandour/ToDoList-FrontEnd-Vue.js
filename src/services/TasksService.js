import Api from '@/services/Api'

export default {
	getlist (){
		return Api().get('tasks')
	},
	postlist (task){
		return Api().post('task/add', task)
	},
	editlist (task){
		return Api().put(`task/edit/${task.id}`, task)
	},
	viewtask (taskId){
		return Api().get(`task/${taskId}`)
	},
}