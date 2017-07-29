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
					GitHub: 'https://github.com/jonfung/headphone-recommender',
					Website: 'https://headphone-recommender.herokuapp.com'
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
				title: '3D Audio Converter',
				description: 'Web app using Nuxt.js and ffmpeg to modify songs giving it a "3D" effect using interaural time difference.',
				links: {
					GitHub: 'https://github.com/drklee3/3dAC',
					Website: 'https://3d.drklee.me'
				}
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
		],
		contact: [
			{
				title: 'Resume',
				href: '#',
				icon: 'fa-file-text'
			},
			{
				title: 'Email Me',
				href: 'mailto:derricklee98@gmail.com',
				icon: 'fa-envelope'
			},
			{
				title: 'GitHub',
				href: 'https://github.com/drklee3',
				icon: 'fa-github-alt'
			},
			{
				title: 'LinkedIn',
				href: 'www.linkedin.com/in/drklee',
				icon: 'fa-linkedin'
			}
		]
	},
	methods: {
		isGithub: function(test) {
			return test == 'GitHub';
		}
	}
})