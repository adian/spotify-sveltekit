<script>
	import albumImg from '$lib/assets/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg';
</script>

<ul class=" overflow-y-auto {$$restProps.class || ''}" id="xd">
	{#each Array(100) as _}
		<li>
			<div class="flex flex-row items-stretch gap-3 rounded-md p-2 hover:bg-highlight">
				<div>
					<img class="h-12 w-12" src={albumImg} alt="" />
				</div>
				<div>
					<div class="flex h-full flex-col justify-evenly">
						<p class="">Avici playlist</p>
						<p class="text-xs text-subdued">Playlist • asd</p>
					</div>
				</div>
			</div>
		</li>
	{/each}
</ul>
