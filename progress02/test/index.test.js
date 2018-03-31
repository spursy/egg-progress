'use strict' 
const {app} = require('egg-mock/bootstrap');

describe('test/index.test.js', () => {
    it ('should GET/ with IOS', () => {
        return app.httpRequest()
            .get('/')
            .set('user-agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1')
            .expect(200)
            .expect('isIOS: true');
    });

    it ('should not GET/ with IOS', () => {
        return app.httpRequest()
            .get('/')
            .expect(200)
            .expect('isIOS: false')
    })
})