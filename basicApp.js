const { response } = require('express');
const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get("/",(request, response)=> {
    readFile('./home.html','utf-8',(err,html)=>{
        if (err){
            response.status(500).send('Out of Order')
        }
        response.send(html);
    })
});

app.listen(process.env.PORT||3000,()=>console.log('App availible on http://localhost:3000'))