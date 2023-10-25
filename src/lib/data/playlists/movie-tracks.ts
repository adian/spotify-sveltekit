import { createCollection, type Track } from '$lib/collection';

const TRACKS: Track[] = [
	{
		title: 'It Must Have Been Love',
		artist: 'Roxette',
		album: "Roxette's Greatest Hits: Don't Bore Us - Get to the Chorus!",
		durationInS: 259,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/xurswq1487083690.jpg'
	},
	{
		title: 'Blaze of Glory',
		artist: 'Jon Bon Jovi',
		album: 'Blaze of Glory',
		durationInS: 347,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/typquq1358722631.jpg'
	},
	{
		title: 'Happy',
		artist: 'Pharrell Williams',
		album: 'Girl',
		durationInS: 233,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/xqxupu1414360149.jpg'
	},
	{
		title: 'Take My Breath Away',
		artist: 'Berlin',
		album: 'Count Three \u0026 Pray',
		durationInS: 252,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/vpwvwx1487185297.jpg'
	},
	{
		title: 'Skyfall',
		artist: 'Adele',
		album: 'Skyfall',
		durationInS: 286,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/vuxuyy1361379938.jpg'
	},
	{
		title: '9 to 5',
		artist: 'Dolly Parton',
		album: '9 to 5 and Odd Jobs',
		durationInS: 166,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/yrvyqs1555437225.jpg'
	},
	{
		title: '(Everything I Do) I Do It for You',
		artist: 'Bryan Adams',
		album: 'Waking Up the Neighbours',
		durationInS: 394,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/rsqxyp1487083202.jpg'
	},
	{
		title: 'Check on It',
		artist: 'Beyoncé',
		album: 'Check on It',
		durationInS: 223,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/wwrpxx1555437108.jpg'
	},
	{
		title: 'The Power of Love',
		artist: 'Huey Lewis and the News',
		album: 'Fore!',
		durationInS: 262,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/qpwxxr1555437346.jpg'
	},
	{
		title: 'Ghostbusters',
		artist: 'Ray Parker Jr.',
		album: 'Ghostbusters',
		durationInS: 247,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/ryrupw1555437015.jpg'
	},
	{
		title: 'Lose Yourself',
		artist: 'Eminem',
		album: 'Curtain Call: The Hits',
		durationInS: 326,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/wquuyq1359160062.jpg'
	}
];

export const MOVIE_SONGS_PLAYLIST = createCollection({
	name: 'Best Movie Songs',
	tracks: TRACKS,
	type: 'playlist',
	color: '#575668',
	coverSrc: 'https://www.theaudiodb.com/images/media/track/thumb/xurswq1487083690.jpg',
	id: 'MOVIE_SONGS_PLAYLIST'
});
