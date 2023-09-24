<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType;
	export let disabled: boolean = false;

	$: disabledCss = disabled ? 'cursor-not-allowed opacity-30' : '';
</script>

<button class="rounded-full bg-highlight p-2 text-white {disabledCss}" {...$$restProps} on:click {disabled}>
	<svelte:component this={icon} class="h-4 w-4" />
</button>
