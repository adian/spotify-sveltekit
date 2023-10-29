<script lang="ts">
	import type { Collection } from '$lib/collection';
	import IconPlay from '$lib/components/icons/IconPlay.svelte';

	export let data: Collection;

	$: gridTemplate = data.type === 'album' ? 'album-grid-template' : 'playlist-grid-template';

	function toTimeText(timeInSeconds: number): string {
		let result = '';
		result += Math.floor(timeInSeconds / 60);
		result += ':';

		const seconds = timeInSeconds % 60;
		if (seconds < 10) {
			result += '0';
		}
		result += seconds;

		return result;
	}
</script>

<div
	class="flex flex-row items-end gap-6 px-4 py-5"
	style="background: linear-gradient(to bottom, {data.color}, transparent); "
>
	<div>
		<img
			crossorigin="anonymous"
			src={data.coverSrc}
			class="max-w-sm object-scale-down"
			alt="playlist cover"
			style="view-transition-name:{data.id}-cover"
		/>
	</div>
	<div>
		<span class="text-sm">{data.type}</span>
		<h2 class="pb-4 text-7xl font-extrabold">{data.name}</h2>
		<span>{data.tracks.length} songs, about {data.totalTimeText} </span>
	</div>
</div>

<div class="sticky top-0 mb-4 border-b-[1px] px-4 text-subdued">
	<div class="grid gap-4 {gridTemplate} gap-1 bg-primary px-4 py-3 text-left text-sm text-subdued">
		<div class="text-center">#</div>
		<div>Title</div>

		{#if data.type !== 'album'}
			<div>Album</div>
		{/if}

		<div>Time</div>
	</div>
</div>

<div class="px-4 text-sm">
	{#each data.tracks as track, index}
		<div
			class="grid gap-4 {gridTemplate} track-row rounded-md px-4 py-1 text-left text-subdued hover:bg-highlight"
		>
			<div class="flex items-center justify-center">
				<span class="index-number">
					{index}
				</span>
				<span class="index-icon">
					<IconPlay class="h-4 w-4" />
				</span>
			</div>

			<div class="row- flex items-center gap-3">
				{#if data.type !== 'album'}
					<div>
						<img src={track.thumbUrl} alt="{track.title} cover" class="h-11 w-11 object-fill" />
					</div>
				{/if}

				<div class="flex flex-col align-middle">
					<span class="text-primary">{track.title}</span>
					<span>{track.artist}</span>
				</div>
			</div>

			{#if data.type !== 'album'}
				<div class="flex items-center">{track.album}</div>
			{/if}

			<div class="flex items-center">{toTimeText(track.durationInS)}</div>
		</div>
	{/each}
</div>

<style>
	.playlist-grid-template {
		grid-template-columns: [index] 16px [first] 4fr [var1] 2fr [last] minmax(120px, 1fr);
	}
	.album-grid-template {
		grid-template-columns: [index] 16px [first] 4fr [var1] minmax(120px, 1fr);
	}

	.track-row:hover .index-number {
		display: none;
	}
	.track-row .index-icon {
		display: none;
	}
	.track-row:hover .index-icon {
		display: block;
	}
</style>
