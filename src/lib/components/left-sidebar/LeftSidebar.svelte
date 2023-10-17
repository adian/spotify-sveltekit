<script>
	import MenuItem from './MenuItem.svelte';
	import Card from '../Card.svelte';
	import PlaylistsList from './CollectionsList.svelte';
	import IconHome from '../icons/IconHome.svelte';
	import IconMusicLibrary from '../icons/IconMusicLibrary.svelte';
	import IconSearch from '../icons/IconSearch.svelte';
</script>

<nav class="flex flex-grow flex-col gap-2 {$$restProps.class ?? ''}">
	<Card>
		<ul>
			<li>
				<MenuItem icon={IconHome} text="Home" href="/" />
				<MenuItem icon={IconSearch} text="Search" href="#" />
			</li>
		</ul>
	</Card>
	<Card class="flex-grow">
		<div class="flex h-full flex-col">
			<MenuItem icon={IconMusicLibrary} text="Your Library" href="#" />

			<PlaylistsList class="flex-shrink flex-grow basis-0 overflow-auto" />
		</div>
	</Card>
</nav>
