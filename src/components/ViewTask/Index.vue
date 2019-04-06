<template>
	<div>
		<v-layout>
			<v-flex xs6 offset-xs3>
				<task-meta-data 
					:task="task"/>
			</v-flex>

		</v-layout>
	</div>

</template>

<script>
import TasksService from '@/services/TasksService'
import TaskMetaData from '@/components/ViewTask/TaskMetaData'

export default {
	data(){
		return {
			task: {}
		}
	},
	async mounted() {
		const taskId = this.$store.state.route.params.id
		this.task = (await TasksService.viewtask(taskId)).data
	},
	components: {
		TaskMetaData
	}
}
</script>

<style scoped>
	
</style>