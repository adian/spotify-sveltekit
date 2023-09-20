<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
</script>

<button class="text-white rounded-full bg-highlight p-2">
	<svelte:component this={icon} class="h-4 w-4 {$$restProps.class || ''}" />
</button>
