//Lets require/import the HTTP module
var http = require('http');
//Lets require/import the HTTPDispatcher module
var dispatcher = require('httpdispatcher');

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

dispatcher.onGet("/on", function(req, res) {
    console.log("Success");
    var message = req.params.path;
    var message = message.replace(/[- )(]/g,'');
     console.log(""+message);
});  

