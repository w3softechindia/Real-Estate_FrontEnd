

let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/lahomes/browser'));

app.get('/*',(req,resp)=>{
    resp.sendFile(__dirname+'/dist/lahomes/browser/index.html');
});

app.listen(process.env.PORT || 4200);
