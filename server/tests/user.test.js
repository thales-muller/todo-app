const request = require('supertest');
const app = require('../server');
const knex = require('../database/connection');

describe('TestUser APIs', () => {

    beforeAll(async () => {
        await knex.migrate.down({ name: '20250222234215_create-users.js' }).catch(() => { });
        await knex.migrate.up({ name: '20250222234215_create-users.js' });
    });

    afterAll(async () => {
        await knex.migrate.down({ name: '20250222234215_create-users.js' });
        await knex.destroy();
    });

    let userId;

    test('Post /user - Should create a new user', async () => {
        const newUser = {
            name: 'John',
            email: 'john@email.com'
        };

        const res = await request(app).post('/user').send(newUser);

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toBe(newUser.name);
        userId = res.body.id;
    });

    test('Get /user/:id - Should return Jhon user', async() => {
        const res = await request(app).get(`/user/${userId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
    });

    test('Get /user - Should return an array of users', async() => {
        const res = await request(app).get('/user');

        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    test('Patch /user/:id - Should update Jhon user', async() =>{
        const updatedUser = {
            name: 'John 2',
            email: 'john2@email.com'
        };

        const res = await request(app).patch(`/user/${userId}`).send(updatedUser);

        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe(updatedUser.name);
    });

    test('Delete /user/:id - Should delete Jhon user', async()=>{
        const res = await request(app).delete(`/user/${userId}`);

        expect(res.statusCode).toEqual(200);
    });
});