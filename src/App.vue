<script setup>
	import { RouterLink, RouterView } from 'vue-router';
	import { useRoute } from 'vue-router';
	import { ref, watch } from 'vue';

	const route = useRoute();
	const skipLink = ref(null);

	watch(
		() => route.path,
		() => {
			skipLink.value.focus();
		}
	);
</script>

<template>
	<div id="layout">
		<ul class="skip-links">
			<li>
				<a
					ref="skipLink"
					href="#main"
					class="skip-link"
					>Skip to main content</a
				>
			</li>
		</ul>
		<header class="wrapper">
			<nav>
				<RouterLink :to="{ name: 'event-list' }">Events</RouterLink>
				|
				<RouterLink :to="{ name: 'about' }">About</RouterLink>
			</nav>
		</header>
		<RouterView />
	</div>
</template>

<style>
	.skip-links > li::marker {
		color: transparent;
	}
	.skip-link {
		white-space: nowrap;
		margin: 1em auto;
		top: 0;
		position: fixed;
		left: 50%;
		margin-left: -72px;
		opacity: 0;
	}
	.skip-link:focus {
		opacity: 1;
		background-color: white;
		padding: 0.5em;
		border: 1px solid #2c3e50;
		color: #42b983;
	}
	#layout {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	nav {
		padding: 30px;
	}
	nav a {
		font-weight: bold;
		color: #2c3e50;
	}
	nav a.router-link-exact-active {
		color: #42b983;
	}
	h2 {
		font-size: 20px;
	}
</style>
