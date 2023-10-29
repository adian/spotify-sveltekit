<script lang="ts">
	import { onMount } from 'svelte';
	import IconXMark from './icons/IconXMark.svelte';

	let dialog: HTMLDialogElement;
	let show = false;

	onMount(() => {
		show = !document.startViewTransition;
	});

	$: if (show) {
		dialog.showModal();
	}

	function close() {
		dialog.close();
	}
</script>

<dialog bind:this={dialog} style="background-color:transparent">
	<div class="flex max-w-xs flex-col content-evenly gap-7 rounded-xl px-4 py-7 bg-primary">
		<div class="self-end">
			<button on:click={close} class="rounded-full p-2 text-white hover:bg-highlight">
				<IconXMark class="h-5 w-5" />
			</button>
		</div>
		<div class="text-center">
			To get the most from this example, please use a browser that supports
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API"
				class="underline">View Transitions API</a
			>, like Chrome.
		</div>
		<div class="text-center">
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility"
				class="underline">Supported browsers</a
			>
		</div>
	</div>
</dialog>

<style>
	::backdrop {
		background-color: black;
		opacity: 0.9;
	}
</style>
