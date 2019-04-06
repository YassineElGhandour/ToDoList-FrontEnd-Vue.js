<template>

	<v-layout>
		<v-flex xs6 offset-xs3>
			<panel title="Create a Task">
				<form
					name="create-songs-form"
					autocomplete="off">
					<v-text-field
						label="Title"
						required
						:rules="[required]"
						v-model="task.title"
					>
					</v-text-field>

					<v-text-field
						label="Author"
						required
						:rules="[required]"
						v-model="task.author"
					>
					</v-text-field>

					<v-text-field
						label="Task"
						required
						:rules="[required]"
						v-model="task.task"
					>
					</v-text-field>

					<div class="danger-error" v-if="error">
					{{ error }}
					</div>

					<v-btn
						class="blue-grey lighten-4
						"
						@click="postlist">
							Create
					</v-btn>

				</form>
			</panel>
		</v-flex>
	</v-layout>

</template>

<script>
import TasksService from '@/services/TasksService'

export default {
	data () {
		return {
			task: {
				title: null,
				author: null,
				task: null
			}, 
			error: null,
			required: (value) => !!value || 'Required'	
		}
	},
	methods: {
		async postlist() {
			this.error = null
			const areAllFielsFilledIn = Object
				.keys(this.task)
				.every(key => !!this.task[key])
				
			if(!areAllFielsFilledIn){
				this.error = 'Please fill all the requirements'
				return
			}
				try
				{
					const response = await TasksService.postlist(
						this.task
					)
					this.$router.push({name: 'getlist'})
				}
				catch(error){
					this.error = error.response.data.error
				}
			}
	}	
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