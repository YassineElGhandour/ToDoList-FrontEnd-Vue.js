<template>
	<v-layout>
		<v-flex xs6 offset-xs3>
			<panel title="Edit a task">

					<v-text-field
						label="Title"
						v-model="task.title"
					>
					</v-text-field>

					<v-text-field
						label="Author"
						v-model="task.author"
					>
					</v-text-field>

					<v-text-field
						label="Task"
						v-model="task.task"
					>
					</v-text-field>

					<v-checkbox v-model="task.checked" label="Checked" :value="1"></v-checkbox>
					

					<v-btn
						class="blue-grey lighten-4
						"
						@click="editlist">
							Edit
					</v-btn>
			</panel>
		</v-flex>
	</v-layout>

</template>

<script>
import TasksService from '@/services/TasksService'

export default {
	data () {
		return {
			task: {},
			error: null	
		}
	},
	methods: {
		async editlist() {
			const id = this.$store.state.route.params.id
			console.log("id : ", id)
			try
			{
				this.task = await TasksService.editlist(this.task)
				console.log("Task : ", this.task)
			
				this.$router.push({
					name: 'ViewTask',
					params: {
					id: id
					}
				})
			}
			catch(error){
				throw error
			}
		},	
	},
	async mounted () {
			try{
				const taskId = this.$store.state.route.params.id
				this.task = (await TasksService.viewtask(taskId)).data
			}
			catch (err)
			{
				console.log(err)
			}
	},	
}
</script>

<style scoped>
	.error{
		color: red;
	}
	.danger-error{
		color: red;
	}
</style>