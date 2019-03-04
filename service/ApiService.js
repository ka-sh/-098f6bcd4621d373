const axios = require('axios');

class ApiService{
    getTodos(params=1){
        const uri = `https://jsonplaceholder.typicode.com/todos/${params}`;
        return axios.get(uri);
    }
}

module.exports = ApiService;