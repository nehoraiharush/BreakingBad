import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();


router.get('/episode',async(req,res) =>{
    const url = 'https://www.breakingbadapi.com/api/episodes';
    const data_response = await fetch(url,{method:'get'});
    const data = await data_response.json();
    res.render('episodes',{
        data:data
    })
})
export default router;