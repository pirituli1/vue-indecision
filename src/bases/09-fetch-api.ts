
const apiKey = '3kYoqJfr479isdxjxvKwL3LsigQlh3Wc';

fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
.then((resp) =>resp.json())
.then(({data}) => console.log({body}))
.catch((err) => console.log(err))