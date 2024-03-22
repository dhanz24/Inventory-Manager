const request = require('supertest');
const app = require('../../express/server');
const {createUser, deleteUser} = require('../test-utils');


describe('POST /register', () => {

    beforeEach(async () => {
        await deleteUser();
    });

    afterEach (async () => {
      await deleteUser();
    });

    it('should register successfully', async () => {
        
        const response = await request(app)
            .post('/register')
            .send({
                firstName: 'test',
                email: 'test@example.com',
                password: 'testing',
        });
    expect(response.status).toBe(201);
    expect(response.body.newToken).toBeDefined();
    expect(response.body.firstName).toBe('test');
    expect(response.body.email).toBe('test@example.com');
    },10000);

});