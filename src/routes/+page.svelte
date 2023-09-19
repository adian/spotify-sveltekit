<script lang="ts">
	import IconHome from '../lib/components/icons/IconHome.svelte';
	import IconSearch from '../lib/components/icons/IconSearch.svelte';
	import MenuItem from './MenuItem.svelte';
	import Card from '../lib/components/Card.svelte';
	import IconMusicLibrary from '../lib/components/icons/IconMusicLibrary.svelte';

	import albumImg from '$lib/assets/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg';
</script>

<nav>
	<div class="flex flex-col gap-2">
		<Card>
			<ul>
				<li>
					<MenuItem icon={IconHome} text="Home" />
					<MenuItem icon={IconSearch} text="Search" />
				</li>
			</ul>
		</Card>
		<Card>
			<MenuItem icon={IconMusicLibrary} text="Your Library" />

			<ul>
				{#each Array(100) as _}
					<li>
						<div class="hover:bg-bg-highlight flex flex-row gap-3 p-2 items-stretch">
							<div>
								<img class="h-12 w-12" src={albumImg} alt="" />
							</div>
							<div>
								<div class="flex flex-col justify-evenly h-full">
									<p class="">Avici playlist</p>
									<p class="text-xs text-subdued">Playlist • asd</p>
								</div>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</Card>
	</div>
</nav>
