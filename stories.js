var stories = [
	{
		title: 'A Remote Control',
		name: '',
		image:'remotecontrol.png',
		filter:'',
		story: 'Because I used to steal them when I had OCD to save the people from mind poison and keep the trajectories of their life force. I don’t do it (much) anymore – but I own over 267 remote controls – sorry!'
	},
	{
		title: '138',
		name: 'Sarah',
		image: '138.jpg',
		filter:'stress',
		story: 'I had left my job due to severe stress and did not have a job to go to. I was very low and lacking in self-confidence. I started to make myself go for little local walks from my home in the middle of the city. In places where there were lots of people I felt lost, they all seemed full of purpose and direction compared to me. I didn\'t belong. Then I started to notice small pockets of nature that were managing to thrive in harsh conditions. Noticing and then photographing this nature in the urban environment gave me a focus and, looking back, I suppose was a kind of metaphor for hope in bleak surroundings. It was a kind of mindfulness that enabled me to connect again. This photograph is one of those I took during this time of a beautiful lilac blossom growing in a parking bay on the estate where I live. '
	},
	// {
	// 	title: '',
	// 	name: '',
	// 	image: '',
	// 	story: ''
	// },
	// {
	// 	title: '',
	// 	name: '',
	// 	image: '',
	// 	story: ''
	// },
	// {
	// 	title: '',
	// 	name: '',
	// 	image: '',
	// 	story: ''
	// },
	// {
	// 	title: '',
	// 	name: '',
	// 	image: '',
	// 	story: ''
	// },
	// {
	// 	title: '',
	// 	name: '',
	// 	image: '',
	// 	story: ''
	// },
	// {
	// 	title: '',
	// 	name: '',
	// 	image: '',
	// 	story: ''
	// },
	// {
	// 	title: '',
	// 	name: '',
	// 	image: '',
	// 	story: ''
	// }
];

function createStory(story) {
	var storyEl = document.createElement('li');
	return $(storyEl)
		.append('<div></div>')
		.append('<img src="' + story.src + '" />')
		.after('<div>' + story.title + '</div>')
		.after('<div>' +  story.story + '</div>');
}
	
var firstStory = createStory(stories[0]);
console.log(firstStory);

$('body').append(firstStory);