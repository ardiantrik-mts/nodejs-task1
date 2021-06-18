var http = require('http');
var fs = require('fs');
const qs = require('querystring') 

//create a server object:
http.createServer(function (req, res) {
    // var food;
    // fs.readFile('foodData.json', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.write(data);
    //     return res.end();
    //   });

    console.log(req.method);
    if (req.method === 'GET') {
        // if (req.url === '/') {
        //     res.end(`<h1>Hello World</h1>`)
        // }
        console.log(req.url);
        if (req.url === '/food' || req.url === '/beverage') {
            fs.readFile(__dirname+req.url+'.json', function(err, data) {
                
                // let jsonData = data.toString('utf8');
                // console.log(jsonData);
                // let obj1 = jsonData.find(({ id }) => id == '1');
                // console.log(obj1);
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(data);
                return res.end();
            });
        }else{
            res.end(`{
                "message": "${http.STATUS_CODES[404]}"
            }`);
        }
    } else {
        res.end(`{"message": "${http.STATUS_CODES[405]}"}`)
    }
    // res.end(`{"message": "${http.STATUS_CODES[404]}"}`)
}).listen(8080, () =>{
    console.log("server is running");
}); //the server object listens on port 8080 