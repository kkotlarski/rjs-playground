({
	baseUrl: '../js',
	dir: 'dist-module/',
	mainConfigFile: '../js/config.js',
	optimize: 'none',
	removeCombined: true,
	modules: [
		{
			name: 'config',
			include: ['common2']
		},
		{
			name: 'module-1/init',
			exclude: ['config']
		},
		{
			name: 'module-2/init',
			exclude: ['config']
		}
	]
})