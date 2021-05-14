const axios = require('axios');
const getRequest = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data);
    } catch (err) {
        console.error(err);
    }
};

getRequest()