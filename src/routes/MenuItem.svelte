<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let text: string;
</script>

<div class="flex flex-row gap-6 py-3 text-grey hover:text-base duration-300 font-bold">
	<svelte:component this={icon} />
	{text}
</div>
