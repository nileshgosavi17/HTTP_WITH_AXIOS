const axios = require('axios');
const postRequest = async () => {
    const newTodo = { 
        userId: 101,  
        title: 'GOOD LUCK',
        completed: false
    }

    try {
        const resp = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
}

postRequest()