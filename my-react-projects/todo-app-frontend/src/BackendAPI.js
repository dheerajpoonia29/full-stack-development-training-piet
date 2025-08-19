import axios from 'axios'

const host = "http://localhost:3000"

async function callCreateAPI(apiPath, body) {
    return await axios.post(host + apiPath, body)
        .then(response => {
            console.log(`callCreateAPI response ${JSON.stringify(response.data)}`);
            return response.data;
        })
        .catch(error => {
            alert(`api call got failed, error ${error}`);
            return null;
        })
}

async function callGetAllAPI(apiPath) {
    return await axios.get(host + apiPath)
        .then(response => {
            console.log(`callGetAllAPI response ${JSON.stringify(response.data)}`);
            return response.data;
        })
        .catch(error => {
            alert(`callGetAllAPI call got failed, error ${error}`);
        })
}

export { callCreateAPI }