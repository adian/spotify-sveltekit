<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { assertPresent, lastElement } from '$lib/utils';
	import { onDestroy } from 'svelte';
	import Card from '../Card.svelte';
	import IconArrowLeft from '../icons/IconArrowLeft.svelte';
	import IconArrowRight from '../icons/IconArrowRight.svelte';
	import RoundButton from './RoundButton.svelte';
	import { mainViewCardStyle, mainViewHeaderStyle } from './main-view-store';

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

<main class="w-full">
	<Card class="flex h-full max-h-full w-full flex-col overflow-hidden" style={$mainViewCardStyle}>
		<header class="p-4" style={$mainViewHeaderStyle}>
			<RoundButton icon={IconArrowLeft} disabled={isBackButtonDisabled} on:click={goBack} />
			<RoundButton icon={IconArrowRight} disabled={isForwardButtonDisabled} on:click={goForward} />
		</header>

		<div class="min-h-0 flex-shrink flex-grow basis-0 overflow-auto">
			<slot />
		</div>
	</Card>
</main>
