var url = require('url-watch');
var notify = require('osx-notifier');

if(process.argv.length < 3) {
	console.log('./app.js <url> <frequency-in-ms>');
	process.exit(1);
}

url.watch({
	url: process.argv[2],
	every: process.argv[3],
	do: function(header) {
		console.log('Changed!');
		notify({
			type: 'info',
			title: 'URL update !',
			subtitle: process.argv[2],
			message: 'Updated at ' + (new Date).toUTCString(),
			group: 'Url-change-notify',
		});
	}
});