const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.send('Sample Jira App');
});

app.listen(8080, function () {
	console.log('Listening on port 8080!');
});
