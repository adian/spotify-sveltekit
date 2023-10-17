import type { Collection } from '$lib/collection';
import { KWIAT_JABLONI_MOGLO_BYC_NIC } from './albums/kwiat-jabloni-moglo-byc-nic';
import { QUEEN_A_DAY_AT_RACES } from './albums/queen-a-day-at-races';
import { MOST_STREAMED_PLAYLIST } from './playlists/most-streamed';
import { MOVIE_SONGS_PLAYLIST } from './playlists/movie-tracks';
import { TOP_SONGS_PLAYLIST } from './playlists/top-songs';

export const COLLECTIONS: Collection[] = [
	MOST_STREAMED_PLAYLIST,
	QUEEN_A_DAY_AT_RACES,
	MOVIE_SONGS_PLAYLIST,
	TOP_SONGS_PLAYLIST,
	KWIAT_JABLONI_MOGLO_BYC_NIC
];
