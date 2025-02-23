const request = require('supertest');
const app = require('../server');
const knex = require('../database/connection');

describe('TestComment APIs', () => {

    beforeAll(async () => {
        await knex.migrate.down({ name: '20250222234222_create-comments.js' }).catch(() => { });
        await knex.migrate.up({ name: '20250222234222_create-comments.js' });
    });

    afterAll(async () => {
        await knex.migrate.down({ name: '20250222234222_create-comments.js' });
        await knex.destroy();
    });

    let commentId;

    test('Post /comment - Should create a new comment', async () => {
        const newComment = {
            user_id: 1,
            todo_id: 1,
            text: 'Hello'
        };

        const res = await request(app).post('/comment').send(newComment);

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.user_id).toBe(newComment.user_id);
        commentId = res.body.id;
    });

    test('Get /comment/:id - Should return the comment', async() => {
        const res = await request(app).get(`/comment/${commentId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
    });

    test('Get /comment - Should return an array of comments', async() => {
        const res = await request(app).get('/comment');

        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    test('Patch /comment/:id - Should update the comment', async() =>{
        const updatedComment = {
            user_id: 2,
            todo_id: 2,
            text: 'Hello'
        };
        const res = await request(app).patch(`/comment/${commentId}`).send(updatedComment);

        expect(res.statusCode).toEqual(200);
        expect(res.body.user_id).toBe(updatedComment.user_id);
    });

    test('Delete /comment/:id - Should delete Jhon comment', async()=>{
        const res = await request(app).delete(`/comment/${commentId}`);

        expect(res.statusCode).toEqual(200);
    });
});