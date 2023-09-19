<script lang="ts">
	import '../app.css';

	import IconHome from '../lib/components/icons/IconHome.svelte';
	import IconSearch from '../lib/components/icons/IconSearch.svelte';
	import MenuItem from './MenuItem.svelte';
	import Card from '../lib/components/Card.svelte';
	import IconMusicLibrary from '../lib/components/icons/IconMusicLibrary.svelte';
	import Playlists from '$lib/components/Playlists.svelte';
</script>

<div class="flex h-full min-w-[800px] flex-col">
	<div class="flex-grow bg-yellow p-1">
		<div class="flex h-full flex-row gap-1">
			<nav class="flex min-w-[280px] max-w-xs flex-grow flex-col gap-1">
				<Card>
					<ul>
						<li>
							<MenuItem icon={IconHome} text="Home" />
							<MenuItem icon={IconSearch} text="Search" />
						</li>
					</ul>
				</Card>
				<Card class="flex-grow">
					<div class="flex h-full flex-col">
						<MenuItem icon={IconMusicLibrary} text="Your Library" />

						<Playlists class="flex-shrink flex-grow min-h-0 basis-0" />
					</div>
				</Card>
			</nav>

			<main class="flex-grow" style="background: red">asdfasdf</main>
		</div>
	</div>

	<footer style="background: blue">footer</footer>
</div>
