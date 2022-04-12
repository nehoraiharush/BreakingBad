import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();


router.get('/getCharacter', async (req, res) => {
    const url = 'https://www.breakingbadapi.com/api/characters';
    const data_response = await fetch(url, { method: 'get' });
    const data = await data_response.json();
    res.render('characters', {
        data: data
    })
})

router.get('/quotes', async (req, res) => {
    const url = 'https://www.breakingbadapi.com/api/quotes';
    const url2 = 'https://www.breakingbadapi.com/api/characters';
    const data_response = await fetch(url, { method: 'get' });
    const data_response2 = await fetch(url2, { method: 'get' });
    const data = await data_response.json();
    const data2 = await data_response2.json();


    let formatted_data = [];
    data.forEach(quote => {
        let the_player = {};
        data2.forEach(person => {
            if (person.name == quote.author) {
                the_player = person
            }
        })
        let obj = { the_quote: quote, player: the_player };
        formatted_data.push(obj);
    });

    res.render('quotes', {
        data: formatted_data
    })
})

router.get('/episodes', async (req, res) => {
    const url = 'https://www.breakingbadapi.com/api/episodes';
    const data_response = await fetch(url, { method: 'get' });
    const data = await data_response.json();
    res.render('episodes', {
        data: data
    })
})

router.get('/:character_id', async (req, res) => {
    const character_id = req.params.character_id;
    const url = `https://breakingbadapi.com/api/characters/` + character_id;
    const data_response = await fetch(url, { method: 'get' });
    const data = await data_response.json();
    return res.render('EachCharacter', {
        personById: data,
    })
})

export default router;