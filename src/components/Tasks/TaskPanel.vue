<template>
	<panel title="To Do List">
		<v-btn
			class="grey lighten-2
 			accent-2"
			fab
			@click="navigateTo({name: 'PostList'})">
				<v-icon>add</v-icon>
		</v-btn>

		<br><br><hr/>
				
		<div 
			class="task"
			v-for="task in tasks" 
			:key="task.id">

					<div class="task-title">
						{{ task.title }}
					</div>

					<!--
					<div class="task-author">
						{{ task.author }}
					</div> -->
						
					<div class="task-task">
						{{ task.task }}
					</div>


					<v-btn
						class="grey lighten-2
 						accent-2"
						@click="navigateTo(
							{
								name: 'EditList',
								params: {
									id: task.id
								}
							})">
							Modify
					</v-btn>
	
					<v-btn
						class="grey lighten-2
 						accent-2"
						@click="navigateTo(
						{
							name: 'ViewTask',
							params: {
								id: task.id
							}
							})">
							Details
					</v-btn>

					<hr/>
		</div>
	</panel>
</template>

<script>
import TasksService from '@/services/TasksService'

export default {
	data() {
		return {
			tasks: [		
			]
		}
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
		height: 160px;
		overflow: hidden;
	}
	.task-task{
		font-size: 30px;
	}
	.task-author{
		font-size: 24px;
	}
	.task-title{
		font-size: 18px;
	}
</style>