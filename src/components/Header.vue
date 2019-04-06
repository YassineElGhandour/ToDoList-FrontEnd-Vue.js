<template>
	<v-toolbar fixed class="blue-grey lighten-2
		" dark>

		<v-toolbar-title class="mr-4">
			<span class="home"
				@click="navigateTo({name : 'getlist'})">	
					To Do List
			</span>
		</v-toolbar-title>

		<v-toolbar-items>
			<v-btn
				flat dark
				@click="navigateTo({name: 'getlist'})"
				>
				Browse
			</v-btn>
		</v-toolbar-items>

		<v-spacer></v-spacer>

	</v-toolbar>
</template>

<script>
	export default {
		methods: {
			navigateTo (route) {
				this.$router.push(route)
			}		}
	}
</script>

<style scoped>
	.home{
		cursor : pointer;
	}
	.home:hover {
		color: #E9E;
	}
</style>