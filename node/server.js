

//INCLUDES + DIR
var express = require('express');
const compression = require('compression'); //gzip
var http = require('http');
var _dirname = require('path').dirname(require.main.filename);
var app = express();
var server = http.Server(app);

//use
app.use(compression());
app.use('/static', express.static(_dirname + "/static"));

///HTTP client listen on 3000
server.listen(3000, function(){
});

//ROUTES
app.get("/", (req, res) => {
		res.sendFile(_dirname + "/html/index.html");
});
