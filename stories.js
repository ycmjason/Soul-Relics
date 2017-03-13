var stories = [
	{
		title: 'A Remote Control',
		name: '',
		image:'./remotecontrol.png',
		filter: [],
		story: 'Because I used to steal them when I had OCD to save the people from mind poison and keep the trajectories of their life force. I don’t do it (much) anymore – but I own over 267 remote controls – sorry!'
	},
	{
		title: '138',
		name: 'Sarah',
		image: '138.jpg',
		filter: ['stress'],
		story: 'I had left my job due to severe stress and did not have a job to go to. I was very low and lacking in self-confidence. I started to make myself go for little local walks from my home in the middle of the city. In places where there were lots of people I felt lost, they all seemed full of purpose and direction compared to me. I didn\'t belong. Then I started to notice small pockets of nature that were managing to thrive in harsh conditions. Noticing and then photographing this nature in the urban environment gave me a focus and, looking back, I suppose was a kind of metaphor for hope in bleak surroundings. It was a kind of mindfulness that enabled me to connect again. This photograph is one of those I took during this time of a beautiful lilac blossom growing in a parking bay on the estate where I live. '
	},
	{
		title: 'Clothes Drier',
		name: '',
		image: '',
		filter: [],
		story: 'I would put in my clothes drier (clothers rack). It symbolises my escape from an abusive relationship and my new start in discouraging myself'
	},
	{
		title: '',
		name: 'Sarah',
		image: '',
		filter: [],
		story: 'A shard of glass, from the bathroom window I smashed when I was 20. The object says more than I can put into words, because I could never really explain satisfactorily to anyone else why I did it. I felt constantly trapped at the time. I was sure my skull was contracting, slowly crushing my brain, and I needed to do something drastic to break free. I often thought about smashing windows. I’ve always been quite attached to buildings, and it seemed quite natural to regard a window as an extension of myself. So one day I put my fist through one. It was a double-glazed pane, and I still remember the ‘boom’ when the inner glass broke as the sound of freedom. My flatmates, who had to clean up the mess while I trod all over the broken glass in bare feet, were of an entirely different opinion.'
	},
	{
		title: 'Filippa',
		name: 'Kate',
		image: 'filippa.jpg',
		filter: ['anxiety', 'depression'],
		story: 'Whenever I have a breakdown and I\'m on the verge of despair and don\'t feel like talking to anyone I want to retreat in bed into my own world and just cry in my pillow and squeeze my strawberry Filippa. The idea of calling someone seems pointless or stressful on those moments, so in that sense Filippa has "seen" more sides and states of me than some of the closest people. Just hugging a soft and happy-looking is sometimes enough for me to come back to more manageable feelings.'
	},
	{
		title: '',
		name: '',
		image: '',
		filter: [],
		story: 'A used toothbrush on a bathroom shelf. Inside a toothbrush holder next to the toothpaste as it always is. The only thing is that this toothbrush should not be there. It should be in someone\’s bag while travelling for work.When I saw it, at 10:15 pm that night the world ended and a new one started. You see, this is how the clueless me found out that my partner of 16 years was having an affair with (a most boring) friend. He chose her. They were together for a year by then. I died. The following months after were the most difficult and painful. The first month of being on my own and all that this meant I had all the physical symptoms of the broken heart. I thought seriously constantly of how I might die of how people do die of this. Friends were fabulous and picked me up. Then a beautiful man took my hand and led me out of the darkness, less than a month later, the 100 years later. One day at a time, one minute at a time, one second that the pain isn’t there anymore. Now I am someone who’s more beautiful.'
	}
];

function trimToEllipsis(text) {
	// Trims text and adds ellipsis to prevent ugly overflowing text
	var numCharacters = Math.floor((Math.random() * 100) + 100);
	if(text.length > numCharacters)
		return text.slice(0, numCharacters) + '...';
	else
		return text;
}

function createStory(story) {
	// Maps a story object to a template
	var storyContainer = document.createElement('li');
	var storyEl = document.createElement('div');
	storyEl.className = 'story';

	var storyImageEl = document.createElement('img');
	storyImageEl.className = 'story-image';
	storyImageEl.src = story.image || 'http://www.codeodor.com/images/Empty_set.png';

	var storyTitleEl = document.createElement('h3');
	storyTitleEl.textContent = story.title || 'Untitled';
	storyTitleEl.className = 'story-title';

	var storyAuthorEl = document.createElement('h4');
	storyAuthorEl.textContent = story.name || 'Anonymous';
	storyAuthorEl.className = 'story-author';

	var storyContentEl = document.createElement('p');
	storyContentEl.className = 'story-content';
	storyContentEl.textContent = trimToEllipsis(story.story);

	// Join the elements into a template for a story
	storyEl.append(storyImageEl);
	storyEl.append(storyTitleEl);
	storyEl.append(storyAuthorEl);
	storyEl.append(storyContentEl);
	storyContainer.append(storyEl);
	return storyContainer;
}

// Map each story to a template
var storyTemplates = stories.map(function(story) {
	return createStory(story);
});

// Attach templates to the DOM
var waterfall = document.querySelector('#waterfall');
storyTemplates.forEach(function(template) {
	waterfall.append(template);
});
