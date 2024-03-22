const request = require('supertest');
const app = require('../../express/server');
const {createUser, deleteUser} = require('../test-utils');


describe('POST /login', () => {

    beforeEach(async () => {
        await createUser();
    });
    
    afterEach (async () => {
        await deleteUser();
    });

    it('should login successfully with valid credentials', async () => {


        const response = await request(app)
            .post('/login')
            .send({
                email: 'test@example.com',
                password: 'testing'
            });
        
            console.log(response.body);
        expect(response.status).toBe(200);
        expect(response.body.newToken).toBeDefined();
        expect(response.body.firstName).toBe('test');
        expect(response.body.email).toBe('test@example.com');
        expect(response.body.role).toBe('user');
    });

    it('should return 401 with invalid credentials', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                email: 'test@example.com',
                password: 'wrongpassword'
            });
        expect(response.status).toBe(401);
        expect(response.body.message).toBe('email and password are invalid');
    },10000);

    it('should return 400 for invalid input format', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                email: 'notanemail',
                password: '123',
            });
        expect(response.status).toBe(400);
    });

});


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
    });

    it('should return 400 for invalid input', async () => {
        const response = await request(app)
            .post('/register')
            .send({
                // Invalid or incomplete data
            });
        expect(response.status).toBe(400);
    });

    it('should return 409 for duplicate email', async () => {
        // Register a user for the first time
        await request(app).post('/register').send({
            firstName: 'duplicate',
            email: 'duplicate@example.com',
            password: 'testing123',
        });

        // Try to register the same user again
        const response = await request(app)
            .post('/register')
            .send({
                firstName: 'duplicate',
                email: 'duplicate@example.com',
                password: 'testing123',
            });

        expect(response.status).toBe(409);
    });

});
