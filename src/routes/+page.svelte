<script lang="ts">
	import albumImg from '$lib/assets/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg';
	import { COLLECTIONS } from '$lib/data';

	function welcomeMsg() {
		const hours = new Date().getHours();

		if (5 <= hours && hours < 12) {
			return 'Good morning';
		} else if (12 <= hours && hours < 18) {
			return 'Good afternoon';
		} else {
			return 'Good evening';
		}
	}
</script>

<h2 class="text-3xl font-semibold mb-5">{welcomeMsg()}</h2>

<div class="flex flex-row flex-wrap">
	{#each COLLECTIONS as collection}
		<div class="xl:basis-1/3 basis-1/2 p-1.5">
			<a class="bg-white/10 hover:bg-white/20 flex flex-row rounded-xl overflow-hidden duration-300" href={collection.url}>
				<div>
					<img class="w-20 h-20 " src={collection.coverSrc} alt="collection cover" />
				</div>
				<div class="self-center pl-4">
					{collection.name}
				</div>
			</a>
		</div>
	{/each}
</div>
