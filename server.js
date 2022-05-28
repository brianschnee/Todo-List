const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const { todo } = require('./todo');

const server = http.createServer((req, res) => {
	const page = url.parse(req.url).pathname;
	const params = querystring.parse(url.parse(req.url).query);
	console.log(page);
	if (page === '/') {
		fs.readFile('index.html', function (err, data) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	} else if (page === '/api') {
		console.log('entered');
		if ('todo' in params) {
			const userInput = params['todo'].toLowerCase();
			const index = todo.findIndex(
				(obj) => obj.title.toLowerCase() === userInput,
			);

			if (index) {
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify(todo[index]));
			}
			console.log('end');
		}
	} else if (page == '/css/style.css') {
		fs.readFile('css/style.css', function (err, data) {
			res.write(data);
			res.end();
		});
	} else if (page == '/index.js') {
		fs.readFile('index.js', function (err, data) {
			res.writeHead(200, { 'Content-Type': 'text/javascript' });
			res.write(data);
			res.end();
		});
	} else {
		figlet('404!!', function (err, data) {
			if (err) {
				console.log('Something went wrong...');
				console.dir(err);
				return;
			}
			res.write(data);
			res.end();
		});
	}
});

server.listen(8080);
