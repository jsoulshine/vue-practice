var Mock = require('mockjs');

module.exports = function() {
    return {
        mockData: Mock.mock({
            'data1': 'i am a data for test usage'
        })
    }
}