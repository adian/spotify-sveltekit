<script lang="ts">
	export let disabled: boolean = false;

	$: disabledCss = disabled ? 'cursor-not-allowed opacity-30' : '';
</script>

<button
	class="rounded-full bg-highlight p-2 text-white {disabledCss}"
	{...$$restProps}
	on:click
	{disabled}
>
	<slot />
</button>
