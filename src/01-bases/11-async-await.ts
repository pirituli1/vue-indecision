import { TopLevel } from "../interface/gif.response";
import { gifphyApi } from "./10-axios"

export const getImg = async() => {
    try {
        const resp = await gifphyApi.get<TopLevel>('/random');
        return resp.data.data.images.downsized_large.url;
    } catch (error) {
        throw 'Url no encontrado'
    }
}

getImg()
.then( url => console.log(url))
.catch (err => console.log(err));