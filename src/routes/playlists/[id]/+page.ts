import { error } from '@sveltejs/kit';
import data from '$lib/data/top-tracks.json';

export interface Track {
	title: string;
	artist: string;
	album: string;
	durationInMs: number;
	thumbUrl: string;
}

export function load({ params }) {
	console.log({ params });

	if (params.id !== 'top-100') {
		error(404, 'not found');
	}

	return {
		tracks: data as unknown as Track[]
	};
}
