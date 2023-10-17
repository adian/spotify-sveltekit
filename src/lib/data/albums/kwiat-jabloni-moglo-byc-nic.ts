import { createCollection, type Track } from '$lib/collection';

const TRACKS: Track[] = [
	{
		title: 'Przezroczysty świat',
		artist: 'Kwiat Jabłoni',
		album: 'Mogło być nic',
		durationInS: 254
	},
	{
		title: 'Bankiet',
		artist: 'Kwiat Jabłoni',
		album: 'Mogło być nic',
		durationInS: 240
	},
	{
		title: 'Nie ma mnie',
		artist: 'Kwiat Jabłoni',
		album: 'Mogło być nic',
		durationInS: 214
	},
	{
		title: 'Maska',
		artist: 'Kwiat Jabłoni',
		album: 'Mogło być nic',
		durationInS: 249
	},
	{
		title: 'Zaczniemy od zera',
		artist: 'Kwiat Jabłoni',
		album: 'Mogło być nic',
		durationInS: 242
	},
	{
		title: 'Wyjście z bankietu',
		artist: 'Kwiat Jabłoni',
		album: 'Mogło być nic',
		durationInS: 132
	},
	{
		title: 'Buka',
		artist: 'Kwiat Jabłoni',
		album: 'Mogło być nic',
		durationInS: 236
	},
	{
		title: 'Idzie zima',
		artist: 'Kwiat Jabłoni',
		album: 'Mogło być nic',
		durationInS: 226
	},
	{
		title: 'Drogi proste',
		artist: 'Kwiat Jabłoni',
		album: 'Mogło być nic',
		durationInS: 236
	},
	{
		title: 'Byle jak',
		artist: 'Kwiat Jabłoni',
		album: 'Mogło być nic',
		durationInS: 260
	},
	{
		title: 'Kometa',
		artist: 'Kwiat Jabłoni',
		album: 'Mogło być nic',
		durationInS: 218
	},
	{
		title: 'Mogło być nic',
		artist: 'Kwiat Jabłoni',
		album: 'Mogło być nic',
		durationInS: 252
	}
];

export const KWIAT_JABLONI_MOGLO_BYC_NIC = createCollection({
	name: 'Mogło być nic',
	subtitle: 'Kiwat Jabłoni',
	coverSrc: 'https://www.theaudiodb.com/images/media/album/thumb/xu2rek1641207873.jpg',
	tracks: TRACKS,
	type: 'album'
});
