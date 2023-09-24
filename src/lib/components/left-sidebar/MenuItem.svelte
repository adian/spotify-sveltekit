<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let text: string;
	export let href: string;
</script>

<a
	class="ml-3 flex cursor-pointer flex-row gap-6 py-3 font-bold text-subdued duration-300 hover:text-primary"
	{href}
>
	<svelte:component this={icon} class="h-6 w-6" />
	{text}
</a>
