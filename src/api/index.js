import axios from "axios";
const env = import.meta.env;

const instance = axios.create({
  baseURL: env.VITE_API_URL,
});

async function getRequest(url, extra) {
  const reqConfig = reqConfigGenerate("get", extra);
  const request = await instance
    .get(url, reqConfig)
    .then(function (res) {
      return generateResponse(res);
    })
    .catch(function (error) {
      return catchError(error);
    });
  return request;
}

async function postRequest(url, extra, header = null) {
  const reqConfig = reqConfigGenerate("post", extra);
  const config = reqConfigGenerate("post", header);
  const request = await instance
    .post(url, reqConfig, config)
    .then(function (res) {
      return generateResponse(res);
    })
    .catch(function (error) {
      return catchError(error);
    });
  return request;
}

async function deleteRequest(url, extra) {
  const reqConfig = reqConfigGenerate("delete", extra);
  const request = await instance
    .delete(url, reqConfig)
    .then(function (res) {
      return generateResponse(res);
    })
    .catch(function (error) {
      return catchError(error);
    });
  return request;
}

async function patchRequest(url, extra, header = null) {
  const reqConfig = reqConfigGenerate("patch", extra);
  const config = reqConfigGenerate("patch", header);
  const request = await instance
    .patch(url, reqConfig, config)
    .then(function (res) {
      return generateResponse(res);
    })
    .catch(function (error) {
      return catchError(error);
    });
  return request;
}

function catchError(error) {
  const errorMessage = {
    status: error.response.status,
    data: error.response.data,
  };
  return errorMessage;
}

function generateResponse(res) {
  const response = {
    data: res.data,
    status: res.status,
  };
  return response;
}

function reqConfigGenerate(method, extra) {
  var reqConfig = {};
  if (extra) {
    switch (method) {
      case "get":
        if (extra.params) {
          reqConfig.params = extra.params;
        }
        if (extra.token) {
          reqConfig.headers = { Authorization: "Bearer " + extra.token };
        }
        break;
      case "post":
        if (extra.data) {
          reqConfig = extra.data;
        }
        if (extra.token) {
          reqConfig.headers = { Authorization: "Bearer " + extra.token };
        }
        break;
      case "patch":
        if (extra.data) {
          reqConfig = extra.data;
        }
        if (extra.token) {
          reqConfig.headers = { Authorization: "Bearer " + extra.token };
        }
        break;
      case "delete":
        if (extra.data) {
          reqConfig = extra.data;
        }
        if (extra.token) {
          reqConfig.headers = { Authorization: "Bearer " + extra.token };
        }
        break;
      default:
        break;
    }
  }
  return reqConfig;
}

export { getRequest, postRequest, deleteRequest, patchRequest };
