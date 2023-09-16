<script lang="ts">


	import IconHome from '../lib/components/icons/IconHome.svelte';
	import IconSearch from '../lib/components/icons/IconSearch.svelte';
	import MenuItem from './MenuItem.svelte';
	import Card from './Card.svelte';
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
                <li>
                    <div>
                        <img src={albumImg} alt="">
                        asdf
                    </div>
                </li>
            </ul>
		</Card>
	</div>
</nav>
