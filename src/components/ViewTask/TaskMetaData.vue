<template>
	<panel title="Task Informations" task="Task Metadata">
		<v-layout>
			<v-flex>
				<div>
					{{ task.title }}
				</div>

				<div>
					<strong>{{ task.task }}</strong> 
				</div>
		
			</v-flex>

		</v-layout>
	</panel>
</template>

<script>
import TasksService from '@/services/TasksService'

export default {
	props: [
		'task'
	]
}
</script>

<style scoped>
	.song{
		padding: 20px;
		height: 330px;
		overflow: hidden;
	}
	.song-title{
		font-size: 30px;
	}
	.song-artist{
		font-size: 24px;
	}
	.song-genre{
		font-size: 18px;
	}
	.album-image{
		width: 70%;
	}
	
</style>