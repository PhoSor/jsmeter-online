var path = require('path');
var express = require('express'),
    app = express();
var port = process.env.PORT || 3000;
var oneYear = 86400000 * 365;

app.use(express.compress());

app.use(express.static(
    path.join(__dirname, 'public'), {maxAge: oneYear}));

app.listen(port);
console.log('Listening on port', port);

