const port = 5000;
const siteName = `http://localhost:${port}`;

function headers() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

function handleResponse() {
  return async (resp) => {
    const text = await resp.text();
    let jsonRes = null;

    if (!resp.ok) {
      let errorBody = "error";
      try {
        errorBody = JSON.parse(text);
      } catch (err) {
        console.error(err.message);
      }

      jsonRes = {
        isError: true,
        errorBody,
      };
    } else if (text) {
      jsonRes = JSON.parse(text);
    } else {
      jsonRes = null;
    }

    return jsonRes;
  };
}

class ApiClient {
  static get(route) {
    const url = `${siteName}${route}`;
    return fetch(url, {
      method: "GET",
      headers: headers(),
    }).then(handleResponse());
  }

  static post(route) {
    const url = `${siteName}${route}`;
    return fetch(url, {
      method: "POST",
      headers: headers(),
    }).then(handleResponse());
  }
}

export default ApiClient;
