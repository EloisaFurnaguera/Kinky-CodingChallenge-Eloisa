const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const path = require('path');
const winston = require('winston');

const PORT = 3000;

const logger = winston.createLogger({
	transports: [new (winston.transports.Console)()],
});

const app = express();

app.use(express.urlencoded());

// Static assets.
app.use(express.static(path.join(__dirname, 'public')));

// Logger.
app.use(morgan(':method :url :status :response-time ms', {
	stream: {
		write: message => logger.info(message.trim()),
	},
}));

// Configure templating engine.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'njk');
nunjucks.configure(app.get('views'), {
	autoescape: true,
	express: app,
});

const comments = [
	"My comments, and more comments",
	"I bet they also have many comments",
	"Comments are great"
];

app.get('/', (request, response) => {
	const options = { pageTitle: 'Homepage', comments: comments };
	return response.render('home', options);
});

// Submit form endpoint
app.post('/', (request, response) => {
	const username = request.body.username;
	const comment = request.body.comment;
	comments.push(comment);
	return response.render('home', { submittedComment: true, comments: comments });
})

app.listen(PORT, () => {
	logger.log({ level: 'info', message: `listening on ${PORT}` });
});
