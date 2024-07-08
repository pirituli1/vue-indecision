import axios from "axios";
import type { TopLevel } from "../interface/gif.response";

const apiKey = '3kYoqJfr479isdxjxvKwL3LsigQlh3Wc';

export const gifphyApi = axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey,
    }
});


// gifphyApi.get<TopLevel>('/random')
//     .then( resp => console.log(resp.data.data.images.downsized_large.url))
//     .catch( err => console.log(err));