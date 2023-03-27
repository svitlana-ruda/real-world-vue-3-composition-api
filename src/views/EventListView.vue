<script setup>
	import { ref, onMounted } from 'vue';
	import EventService from '@/services/EventService.js';
	import EventCard from '@/components/EventCard.vue';

	const events = ref(null);

	onMounted(() => {
		EventService.getEvents()
			.then((response) => {
				events.value = response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	});
</script>

<template>
	<main id="main">
		<h1>Events For Good</h1>
		<section class="events">
			<EventCard
				v-for="event in events"
				:key="event.id"
				:event="event"
			/>
		</section>
	</main>
</template>

<style scoped>
	.events {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
