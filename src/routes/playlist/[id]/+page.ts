import { PLAYLISTS, type Playlist } from '$lib/data/playlists.js';
import { error } from '@sveltejs/kit';

export function load({ params }): Playlist {
	const playlist = PLAYLISTS[params.id];

	if (!playlist) {
		throw error(404, 'not found');
	}

	return playlist;
}
