import { TOP_TRACKS, type Track } from './top-tracks';

export interface Playlist {
	tracks: Track[];
	name: string;
	coverSrc: string;
	totalTime: string;
}

export const PLAYLISTS: Record<string, Playlist> = {
	'top-tracks': createPlaylist('Top tracks', TOP_TRACKS)
};

function createPlaylist(name: string, tracks: Track[]): Playlist {
	return {
		name,
		tracks,
		coverSrc: tracks[0].thumbSrc,
		totalTime: totalTimeText(totalTime(tracks))
	};
}

function totalTimeText(seconds: number): string {
	const HOUR_IN_S = 60 * 60;
	const MIN_IN_S = 60;

	let result = '';

	const hours = Math.floor(seconds / HOUR_IN_S);
	if (hours > 0) {
		result += hours + ' hr';
	}

	const minutes = Math.floor((seconds % HOUR_IN_S) / MIN_IN_S);
	if (minutes > 0) {
		if (result !== '') {
			result += ' ';
		}
		result += minutes + ' min';
	}

	return result;
}

function totalTime(tracks: Track[]): number {
	return tracks.map((t) => t.durationInS).reduce((prev, curr) => prev + curr, 0);
}
