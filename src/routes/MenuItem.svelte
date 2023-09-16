<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let text: string;
</script>

<div class="flex flex-row gap-6 py-3 text-grey hover:text-white duration-300">
	<svelte:component this={icon} />
	{text}
</div>
