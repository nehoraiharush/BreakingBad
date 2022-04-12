import express from 'express';
import bparser from 'body-parser';
const app = express(); 

app.set('view engine','ejs');
app.set('views','view');


app.use(bparser.urlencoded());
app.use(bparser.json());



import charcterRoute from './controllers/characters.js';
app.use('/character',charcterRoute);


const port = 3001;
app.listen(port,function(){
    console.log(`${port} Working good!!!`);
})