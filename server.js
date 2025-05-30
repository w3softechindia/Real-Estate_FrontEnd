
let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/lahomes'));

app.get('/*',(req,resp)=>{
    resp.sendFile(__dirname+'/dist/lahomes/index.html');
});

app.listen(process.env.PORT || 4200);
