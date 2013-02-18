var path = require('path');
var express = require('express'),
    app = express();
var port = 3000;

app.use(express.static(
    path.join(__dirname, 'public')));

app.listen(port);
console.log('Listening on port', port);

