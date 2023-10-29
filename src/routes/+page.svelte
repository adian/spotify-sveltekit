<script lang="ts">
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

<div class="px-4">
	<h2 class="mb-5 text-3xl font-semibold">{welcomeMsg()}</h2>

	<div class="flex flex-row flex-wrap">
		{#each COLLECTIONS as collection}
			<div class="basis-1/2 p-1.5">
				<a
					class="flex flex-row overflow-hidden rounded-md bg-white/10 outline-none duration-300 hover:bg-white/20"
					href={collection.url}
					style="view-transition-name:{collection.id}"
				>
					<div class="h-24 w-24">
						<img
							class="h-full w-full object-cover"
							src={collection.coverSrc}
							alt="collection cover"
							style="view-transition-name:{collection.id}-cover"
						/>
					</div>
					<div class="self-center pl-4">
						{collection.name}
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>
