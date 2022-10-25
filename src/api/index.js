import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

async function getList(url, query = null) {
    var realUrl = API_URL+"/"+url;
    if (query != null) {
        realUrl = realUrl+"?"+query;
    }
    const data = await axios.get(realUrl);
    return data;
}

async function getShow(url, parameter) {
    var realUrl = API_URL+"/"+url+"/"+parameter;
    const data = await axios.get(realUrl);
    return data;
}

export { getList, getShow };