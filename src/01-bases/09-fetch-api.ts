import type { TopLevel } from "../interface/gif.response";

const apiKey = '3kYoqJfr479isdxjxvKwL3LsigQlh3Wc';

fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
.then((resp) =>resp.json())
.then((body:TopLevel) => console.log(body.data.images.original.mp4))
.catch((err) => console.log(err))