const http=require('http');
const fs=require('fs');
const zlib=require('zlib');


var server=http.createServer(function(req,res){
    console.log(req.url);

    fs.readFile(`.${req.url}`,(err,data)=>{
        if (err)
        {
            console.log(err);
            res.write('404');
        }
        else {
            res.write(data);
        }
        res.end();
    });

});

server.listen(10002);
