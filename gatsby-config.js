module.exports = {
	siteMetadata: {
		title: 'PWA.Tips'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'pwa.tips',
				short_name: 'pwa.tips',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#3173e0',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		'gatsby-plugin-offline',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: ['Product+Sans:300,400,500,700']
			}
		}
	]
};
