<script>
	import MenuItem from './MenuItem.svelte';
	import Card from '../Card.svelte';
	import Playlists from './Playlists.svelte';
	import IconHome from '../icons/IconHome.svelte';
	import IconMusicLibrary from '../icons/IconMusicLibrary.svelte';
	import IconSearch from '../icons/IconSearch.svelte';
</script>

<nav class="flex min-w-[280px] max-w-xs flex-grow flex-col gap-2">
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

			<Playlists class="min-h-0 flex-shrink flex-grow basis-0" />
		</div>
	</Card>
</nav>
