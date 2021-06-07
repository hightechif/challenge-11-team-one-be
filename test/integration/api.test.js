const request = require('supertest')
const app = require('../../app')


describe('GET /', () => {
    test("Return status: 200 and welcome message", done => {
        request(app).get('/').then(res => {
            expect(res.statusCode).toBe(200)
            expect(res.body).toHaveProperty('status') 
            expect(res.body).toHaveProperty('message') 
            expect(res.body.status).toBe("OK") 
            expect(res.body.message).toEqual("Welcome to cv-programmer API")
            done()
        })
    })
})