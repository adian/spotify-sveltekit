import type { Collection } from '$lib/collection';
import { COLLECTIONS } from '$lib/data';
import { error } from '@sveltejs/kit';

export function load({ params }): Collection {
	const playlist = COLLECTIONS.find(
		(c) => c.name === params.collectionName && c.type === params.collectionType
	);

	if (!playlist) {
		throw error(404, 'not found');
	}

	return playlist;
}
