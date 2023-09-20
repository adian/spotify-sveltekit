<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let text: string;
</script>

<div class="flex flex-row gap-6 py-3 text-subdued hover:text-primary duration-300 font-bold ml-3">
	<svelte:component this={icon} class="w-6 h-6" />
	{text}
</div>
