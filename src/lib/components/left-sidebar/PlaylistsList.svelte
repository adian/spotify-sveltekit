<script>
	import { PLAYLISTS } from '$lib/data/playlists';
</script>

<ul class="overflow-y-auto {$$restProps.class || ''}">
	{#each Object.entries(PLAYLISTS) as [key, playlist]}
		<li class="cursor-pointer">
			<a class="flex flex-row items-stretch gap-3 rounded-xl p-2 hover:bg-highlight" href="/playlist/{key}">
				<div>
					<img class="h-12 w-12" src={playlist.coverSrc} alt="playlist cover" />
				</div>
				<div>
					<div class="flex h-full flex-col justify-evenly">
						<p class="">{playlist.name}</p>
						<p class="text-xs text-subdued">{playlist.tracks.length} songs</p>
					</div>
				</div>
			</a>
		</li>
	{/each}
</ul>
