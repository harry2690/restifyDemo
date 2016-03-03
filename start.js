var restify = require('restify'),
	demo = require("./routes/demo");

var ip_addr = '127.0.0.1';
var port    =  '3000';

var server = restify.createServer({
    name : "restifyDemo"
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

demo(server);

server.listen(port ,ip_addr, function(){
    console.log('%s listening at %s ', server.name , server.url);
});