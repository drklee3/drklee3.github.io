var app = new Vue({
	el: '#app',
	data: {
		skills: [
			{
				name: "JavaScript",
				icon: "devicon-javascript-plain"
			},
			{
				name: "Node.js",
				icon: "devicon-nodejs-plain"
			},
			{
				name: "Vue.js",
				icon: "devicon-vuejs-plain"
			},
			{
				name: "Python",
				icon: "devicon-python-plain"
			},
			{
				name: "C++",
				icon: "devicon-cplusplus-plain"
			},
			{
				name: "Adobe After Effects",
				icon: ""
			},
			{
				name: "Adobe Photoshop",
				icon: "devicon-photoshop-plain"
			}
		],
		projects: [
			{
				title: 'headphone-recommender',
				description: 'Recommends 100+ headphones based on price, form factor, \
				and sound signature based on mp3 upload. Uses the Fourier Transform and Welch\'s method \
				on the mp3 to generate a spectral density estimation of the song, then classifies it and returns a list of headphones for the user.',
				links: {
					Website: 'https://headphone-recommender.herokuapp.com',
					GitHub: 'https://github.com/jonfung/headphone-recommender'
				},
				tech: [
					'python',
					'HTML',
					'JavaScript',
					'jQuery'
				]
			},
			{
				title: 'vlive-dl',
				description: 'Command line tool that downloads and merges VLive videos & subtitles.',
				links: {
					GitHub: 'https://github.com/drklee3/vlive-dl',
					npm: 'https://www.npmjs.com/package/vlive-dl',
				},
				tech: [
					'Node.js'
				]
			},
			{
				title: 'ApliaTotalGrade',
				description: 'Tampermonkey script to show total grade for Aplia.com',
				links: {
					GitHub: 'https://github.com/drklee3/ApliaTotalGrade'
				},
				tech: [
					'JavaScript'
				]
			}
		]
	},
	methods: {
		isGithub: function(test) {
			return test == 'GitHub';
		}
	}
})