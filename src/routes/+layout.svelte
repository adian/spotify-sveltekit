<script lang="ts">
	import '../app.css';

	import LeftSidebar from '$lib/components/left-sidebar/LeftSidebar.svelte';
	import { onNavigate } from '$app/navigation';
	import Card from '$lib/components/Card.svelte';
	import MainViewHeader from '$lib/components/main-view/MainViewHeader.svelte';
	import { page } from '$app/stores';

	export const prerender = true;

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let mainViewHeaderStyles: string | undefined;
	$: if ($page.data?.color) {
		mainViewHeaderStyles = `background-color: ${$page.data.color}`;
	} else {
		mainViewHeaderStyles = undefined;
	}
</script>

<div class="flex h-full min-w-[1000px] flex-col">
	<div class="flex-grow p-2">
		<div class="flex h-full flex-row gap-2">
			<LeftSidebar class="min-w-[300px] max-w-[300px]" />

			<main class="w-full">
				<Card class="flex h-full max-h-full w-full flex-col overflow-hidden">
					<MainViewHeader style={mainViewHeaderStyles} />

					<div class="min-h-0 flex-shrink flex-grow basis-0 overflow-auto">
						<slot />
					</div>
				</Card>
			</main>
		</div>
	</div>
</div>
