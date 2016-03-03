function createRouter(server){
    server.post('/user', function(req, res, next) {
        res.send("[POST]params:"+req.body);
        return next();
    });
    server.put('/user/:id', function(req, res, next) {
        res.send("[PUT]id:"+req.params.id+"<br>"+"params:"+req.body);
        return next();
    });
    server.get("/user/:id", function(req, res, next) {
        res.send("[GET]id:"+req.params.id);
        return next();
    });
    server.del('/user/:id', function(req, res, next) {
        res.send("[DELETE]id:"+req.params.id);
        return next();
    });
}

module.exports = createRouter;