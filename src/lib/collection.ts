export interface Track {
	title: string;
	artist: string;
	album: string;
	durationInS: number;
	thumbUrl?: string;
}

export type CollectionType = 'playlist' | 'album';

export interface Collection {
	readonly name: string;
	readonly subtitle?: string;
	readonly tracks: Track[];
	readonly type: CollectionType;
	readonly coverSrc: string;
	readonly totalTimeText: string;
	readonly url: string;
	readonly color: string;
}

export function createCollection(p: Omit<Collection, 'totalTimeText' | 'url'>): Collection {
	return {
		...p,
		totalTimeText: totalTimeText(p.tracks),
		url: '/' + p.type + '/' + encodeURIComponent(p.name)
	};
}

function totalTimeText(tracks: Track[]): string {
	const seconds = tracks.map((t) => t.durationInS).reduce((prev, curr) => prev + curr, 0);

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
