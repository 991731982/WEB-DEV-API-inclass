//https://developers.giphy.com/
//https://codeshare.io/43935


const express = require('express')
const axios = require('axios');

const app = express();
const port = 3000;

axios.defaults.baseURL = 'http://127.0.0.1:3000/';


    app.get('/:id', (req, res) => {
    axios.get('https://api.giphy.com/v1/gifs/random', {
        params: {
            api_key: '0UVunfQpejJEQhUUykjP2ygtgGz6pPSA',
            tag: req.params.id
        }
    })
        .then(response => {
            console.log(response.data.data);
            res.send(`<img src=${response.data.data.images.original.url} >`);
        })
        .catch(error => {
            console.log(error);
        });
});



app.listen(3000, () => {
	console.log('listening on port 3000')
})

