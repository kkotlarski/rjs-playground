({
	baseUrl: '../js',
	name: 'config',
	out: 'dist-override/build.js',
	findNestedDependencies: true,
	mainConfigFile: '../js/config.js',
	optimize: 'none',
	map: {
		'*': {
			'app': 'app-2'
		}
	}
})