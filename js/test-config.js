var tests = []

for (var file in window.__karma__.files) {
    if (/\.spec\.js$/.test(file)) {
        tests.push(file);
    }
}

require.config({
	baseUrl: 'base/js',
	deps: tests,
    callback: window.__karma__.start
});
