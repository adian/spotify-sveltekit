<script lang="ts">
	import type { Playlist } from './+page';

	export let data: Playlist;
</script>

<div class="p-4">
	<div class="mb-5 flex flex-row items-end gap-6">
		<div>
			<img src={data.coverSrc} class="h-60 w-60" alt="playlist cover" />
		</div>
		<div>
			<span class="text-sm">playlist</span>
			<h2 class="pb-4 text-7xl font-extrabold">{data.name}</h2>
			<span>{data.size} songs, about {data.totalTime} </span>
		</div>
	</div>

	<div class="playlist-grid text-left border-b-[1px] text-subdued mb-4 sticky top-0 py-3 bg-primary">
		<div>#</div>
		<div>Title</div>
		<div>Album</div>
		<div>Time</div>
	</div>

	<div class="playlist-grid text-left text-subdued">
		{#each data.tracks as track, index}
			<div>{index}</div>
			<div class="flex gap-3">
				<div>
					<img src={track.thumbSrc} alt="{track.title} cover" class="h-11 w-11" />
				</div>
				<div class="flex flex-col">
					<span class="text-primary">{track.title}</span>
					<span>{track.artist}</span>
				</div>
			</div>
			<div>{track.album}</div>
			<div>{track.durationInS}</div>
		{/each}
	</div>
</div>

<style>
	.playlist-grid {
		grid-template-columns: [index] 16px [first] 4fr [var1] 2fr [last] minmax(120px, 1fr);
		display: grid;
	}
</style>
