<template>
	<v-layout>
		<v-flex xs6 offset-xs3>
			<task-panel class="mt-2"/>
		</v-flex>
	</v-layout>
</template>

<script>
import TaskPanel from '@/components/Tasks/TaskPanel'
import TasksService from '@/services/TasksService'

export default {
	data() {
		return {
			tasks: [		
			]
		}
	},
	components : {
		TaskPanel
	},
	methods: {
		navigateTo(route) {
			this.$router.push(route)
		}
	},
	async mounted () {
		this.tasks = (await TasksService.getlist()).data
	}
		
}
</script>

<style scoped>
	.task{
		padding: 20px;
		height: 330px;
		overflow: hidden;
	}
</style>