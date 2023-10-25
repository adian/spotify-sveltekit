<script>
	import { page } from '$app/stores';
	import { COLLECTIONS } from '$lib/data';
</script>

<ul class="overflow-y-auto {$$restProps.class || ''}">
	{#each COLLECTIONS as collection}
		<li class="cursor-pointer">
			<a
				class="flex flex-row items-stretch gap-3 rounded-xl p-2 hover:bg-highlight
				{$page.url.pathname === collection.url ? 'bg-highlight' : ''}"
				href={collection.url}
			>
				<div>
					<img class="h-12 w-12 object-cover" src={collection.coverSrc} alt="playlist cover" />
				</div>
				<div>
					<div class="flex h-full flex-col justify-evenly">
						<p class="">{collection.name}</p>
						<p class="text-xs text-subdued">
							{collection.type}
							{#if collection.subtitle}
								• {collection.subtitle}
							{/if}
						</p>
					</div>
				</div>
			</a>
		</li>
	{/each}
</ul>
