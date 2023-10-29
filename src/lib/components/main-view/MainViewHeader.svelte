<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { assertPresent, lastElement } from '$lib/utils';
	import { onDestroy } from 'svelte';
	import IconArrowLeft from '../icons/IconArrowLeft.svelte';
	import IconArrowRight from '../icons/IconArrowRight.svelte';
	import RoundButton from '../RoundButton.svelte';
	import IconGithub from '../icons/IconGithub.svelte';

	let backStack: URL[] = [];
	$: isBackButtonDisabled = backStack.length <= 1;

	let forwardStack: URL[] = [];
	$: isForwardButtonDisabled = forwardStack.length === 0;

	function goBack(): void {
		const current = assertPresent(backStack.pop());
		const last = assertPresent(backStack.pop());
		backStack = [...backStack, last];
		forwardStack = [...forwardStack, current];
		goto(last);
	}

	function goForward(): void {
		const url = assertPresent(forwardStack.pop());
		forwardStack = forwardStack;
		backStack = [...backStack, url];
		goto(url);
	}

	if (browser) {
		const unsubscribe = page.subscribe(({ url }) => {
			const last = lastElement(backStack);

			const nonBackForwardNavigation = last?.href !== url.href;
			if (nonBackForwardNavigation) {
				backStack.push(url);
				backStack = backStack;
				forwardStack = [];
			}
		});

		onDestroy(unsubscribe);
	}
</script>

<header class="flex flex-row justify-between p-4" {...$$restProps}>
	<div>
		<RoundButton disabled={isBackButtonDisabled} on:click={goBack}>
			<IconArrowLeft class="h-4 w-4" />
		</RoundButton>
		<RoundButton disabled={isForwardButtonDisabled} on:click={goForward}>
			<IconArrowRight class="h-4 w-4" />
		</RoundButton>
	</div>
	<div>
		<a href="https://github.com/adian/spotify-sveltekit">
			<IconGithub class="h-9 w-9 fill-[#e7e7e7] hover:fill-white " />
		</a>
	</div>
</header>
