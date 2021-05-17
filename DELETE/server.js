const axios = require('axios');

const deleteRequest = async () => {
    try {
        const resp = await axios.delete('https://jsonplaceholder.typicode.com/todos/1')
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
}

deleteRequest()