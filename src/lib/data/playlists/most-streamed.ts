import { createCollection, type Track } from '$lib/collection';

const TRACKS: Track[] = [
	{
		title: 'Creep',
		artist: 'Radiohead',
		album: 'Pablo Honey',
		durationInS: 235,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/wwvuvu1487239331.jpg'
	},
	{
		title: 'Thinking Out Loud',
		artist: 'Ed Sheeran',
		album: 'x',
		durationInS: 280,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/xtxtyx1432838266.jpg'
	},
	{
		title: 'Let Her Go',
		artist: 'Passenger',
		album: 'All The Little Lights',
		durationInS: 252,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/tuytqw1418394460.jpg'
	},
	{
		title: 'No Diggity',
		artist: 'Blackstreet',
		album: 'Another Level',
		durationInS: 304,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/txqqyx1555062512.jpg'
	},
	{
		title: 'This Is Me',
		artist: 'Keala Settle',
		album: 'This Is Me',
		durationInS: 234,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/qxswts1555061363.jpg'
	},
	{
		title: 'Pumped Up Kicks',
		artist: 'Foster the People',
		album: 'Torches',
		durationInS: 240,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/swyvuv1359352045.jpg'
	},
	{
		title: 'Finesse',
		artist: 'Bruno Mars',
		album: '24K Magic',
		durationInS: 190,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/qwuups1515317654.jpg'
	},
	{
		title: 'Cheap Thrills',
		artist: 'Sia',
		album: 'This Is Acting',
		durationInS: 212,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/uxupws1471540107.jpg'
	},
	{
		title: 'Smells Like Teen Spirit',
		artist: 'Nirvana',
		album: 'Nevermind',
		durationInS: 301,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/urspuv1342344844.jpg'
	},
	{
		title: 'Lose Yourself',
		artist: 'Eminem',
		album: 'Curtain Call: The Hits',
		durationInS: 326,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/wquuyq1359160062.jpg'
	},
	{
		title: 'Thunderstruck',
		artist: 'AC/DC',
		album: 'The Razors Edge',
		durationInS: 293,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/ryvtvs1581423107.jpg'
	},
	{
		title: 'Mr. Brightside',
		artist: 'The Killers',
		album: 'Hot Fuss',
		durationInS: 222,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/rxpwxp1555062082.jpg'
	},
	{
		title: "God's Plan",
		artist: 'Drake',
		album: 'Scorpion',
		durationInS: 198,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/xpsuyq1541245323.jpg'
	},
	{
		title: 'Naïve',
		artist: 'The Kooks',
		album: 'Inside In/Inside Out',
		durationInS: 203,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/rwsqyy1555061750.jpg'
	},
	{
		title: 'No Scrubs',
		artist: 'TLC',
		album: 'FanMail',
		durationInS: 214,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/qsuxqu1359164792.jpg'
	},
	{
		title: 'Iris',
		artist: 'Goo Goo Dolls',
		album: 'Dizzy Up the Girl',
		durationInS: 291,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/yvxxxq1340735459.jpg'
	},
	{
		title: 'Wonderwall',
		artist: 'Oasis',
		album: "(What's the Story) Morning Glory?",
		durationInS: 258,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/ywstvx1359499667.jpg'
	},
	{
		title: 'Fluorescent Adolescent',
		artist: 'Arctic Monkeys',
		album: 'Favourite Worst Nightmare',
		durationInS: 177,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/vqutrs1555061635.jpg'
	},
	{
		title: 'All I Want for Christmas Is You',
		artist: 'Mariah Carey',
		album: 'Merry Christmas',
		durationInS: 241,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/ywrvqv1543146614.jpg'
	},
	{
		title: 'In the End',
		artist: 'Linkin Park',
		album: 'Hybrid Theory',
		durationInS: 216,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/utpwtt1359159821.jpg'
	},
	{
		title: 'Gold Digger',
		artist: 'Kanye West',
		album: 'Late Registration',
		durationInS: 208,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/vqrsqy1555061834.jpg'
	},
	{
		title: 'Bitter Sweet Symphony',
		artist: 'The Verve',
		album: 'Urban Hymns',
		durationInS: 359,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/xvxput1555062451.jpg'
	},
	{
		title: "I'm Yours",
		artist: 'Jason Mraz',
		album: 'We Sing. We Dance. We Steal Things.',
		durationInS: 244,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/yvrwuv1483979966.jpg'
	},
	{
		title: 'How You Remind Me',
		artist: 'Nickelback',
		album: 'Silver Side Up',
		durationInS: 223,
		thumbUrl: 'https://www.theaudiodb.com/images/media/track/thumb/sstvtp1555062227.jpg'
	}
];

export const MOST_STREAMED_PLAYLIST = createCollection({
	name: 'Most streamed songs',
	tracks: TRACKS,
	type: 'playlist',
	coverSrc: 'https://www.theaudiodb.com/images/media/track/thumb/wwvuvu1487239331.jpg',
	color: '#A82415',
	id: 'MOST_STREAMED_PLAYLIST'
});
