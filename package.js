Package.describe({
	name: 'steinitz:react-es6-autobind',
	version: '0.1.2',
	// Brief, one-line summary of the package.
	summary: "For all methods, binds 'this' to the React component created with class extends.",
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/steinitz/Meteor-React-ES6-AutoBind',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use(['ecmascript', 'react@0.14.1_1']);
	api.addFiles('react-es6-autobind.js');
	api.export('SteinitzREA', ['client', 'server']);
});

Package.onTest(function(api) {
	api.use(['ecmascript', 'tinytest', 'react@0.14.1_1']);
	api.use('steinitz:react-es6-autobind');
	api.addFiles('react-es6-autobind-tests.js');
});
