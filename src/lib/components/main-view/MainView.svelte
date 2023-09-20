<script>
	import Card from '../Card.svelte';
	import IconArrowLeft from '../icons/IconArrowLeft.svelte';
	import IconArrowRight from '../icons/IconArrowRight.svelte';
	import RoundButton from './RoundButton.svelte';
</script>

<main class="flex-grow">
	<Card class="h-full w-full flex flex-col">
		<div>
			<RoundButton icon={IconArrowLeft} />
			<RoundButton icon={IconArrowRight} class="cursor-not-allowed opacity-30" />
		</div>

		<slot />
	</Card>
</main>
