import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

async function getList(url, params = null) {
    var baseUrl = API_URL+"/"+url;
    const data = await axios.get(baseUrl, { params: params });
    return data.data;
}

async function getShow(url, parameter) {
    var realUrl = API_URL+"/"+url+"/"+parameter;
    const data = await axios.get(realUrl);
    return data;
}

export { getList, getShow };