import { createCollection, type Collection, type Track } from '$lib/collection';

const TRACKS: Track[] = [
	{
		title: 'Drowse',
		artist: 'Queen',
		album: 'A Day at the Races',
		durationInS: 225,
		thumbUrl: ''
	},
	{
		title: 'You and I',
		artist: 'Queen',
		album: 'A Day at the Races',
		durationInS: 205,
		thumbUrl: ''
	},
	{
		title: 'Long Away',
		artist: 'Queen',
		album: 'A Day at the Races',
		durationInS: 213,
		thumbUrl: ''
	},
	{
		title: 'Tie Your Mother Down',
		artist: 'Queen',
		album: 'A Day at the Races',
		durationInS: 288,
		thumbUrl: ''
	},
	{
		title: 'Somebody to Love',
		artist: 'Queen',
		album: 'A Day at the Races',
		durationInS: 296,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/twwwpy1582887749.jpg'
	},
	{
		title: 'Good Old-Fashioned Lover Boy',
		artist: 'Queen',
		album: 'A Day at the Races',
		durationInS: 174,
		thumbUrl: ''
	},
	{
		title: 'You Take My Breath Away',
		artist: 'Queen',
		album: 'A Day at the Races',
		durationInS: 308,
		thumbUrl: ''
	},
	{
		title: 'The Millionaire Waltz',
		artist: 'Queen',
		album: 'A Day at the Races',
		durationInS: 295,
		thumbUrl: ''
	},
	{
		title: 'Teo Torriatte (Let Us Cling Together)',
		artist: 'Queen',
		album: 'A Day at the Races',
		durationInS: 354,
		thumbUrl: ''
	},
	{
		title: 'White Man',
		artist: 'Queen',
		album: 'A Day at the Races',
		durationInS: 299,
		thumbUrl: ''
	}
];

export const QUEEN_A_DAY_AT_RACES: Collection = createCollection({
	name: 'A Day At The Races',
	subtitle: 'Queen',
	tracks: TRACKS,
	type: 'album',
	coverSrc: 'https://www.theaudiodb.com/images/media/album/thumb/uyprpy1397211527.jpg',
	color: '#f4eff0'
});
