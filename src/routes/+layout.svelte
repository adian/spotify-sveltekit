<script >
	import '../app.css';

	import LeftSidebar from '$lib/components/left-sidebar/LeftSidebar.svelte';
	import MainView from '$lib/components/main-view/MainView.svelte';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			})
		})
	})
</script>

<div class="flex h-full min-w-[800px] flex-col">
	<div class="flex-grow p-2">
		<div class="flex h-full flex-row gap-2">
			<LeftSidebar class="min-w-[300px] max-w-[300px]" />
			<MainView>
				<slot />
			</MainView>
		</div>
	</div>

	<!-- <footer style="background: blue">footer</footer> -->
</div>

