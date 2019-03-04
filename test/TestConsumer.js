const expect  = require('chai').expect;
const assert = require('chai').assert;
const nock = require('nock');
const Consumer = require('../service/Consumer');
const ApiService = require('../service/ApiService');

describe('Testing Consumer',()=>{
    it(`Returns data object on successfull fetch`,async()=>{
        const param = 1;
        const expected  = { userId: 6666,
            id: 6666,
            title: 'Mock data',
            completed: false };
        nock(`https://jsonplaceholder.typicode.com`)
        .get(`/todos/${param}`).reply(200,
            {data:expected});
        const consumer  = new Consumer(new ApiService());
        const response = await consumer.getData(param);
        assert.equal(JSON.stringify(response.data),JSON.stringify(expected));
    });
    
    it(`Returns an object with Error on 404 response`,async()=>{
        const param = 1;
        nock(`https://jsonplaceholder.typicode.com`)
        .get(`/todos/${param}`).reply(404);
        const consumer  = new Consumer(new ApiService());
        const response = await consumer.getData(param);
        assert.equal(response.data,undefined);
        assert.exists(response.error);
    });
})