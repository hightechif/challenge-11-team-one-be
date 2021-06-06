const base = require('../../controllers/index.controller')
const mockRequest = (body = {}) => ({ body })
const mockResponse = () => {
    const res = {}
    res.json = jest.fn().mockRetrunValue(res)
    res.status = jest.fn().mockReturnValue(res)
    return res
}
describe('GET /', () => {
    test('res.json called with { status: OK, message: "Welcome to cv-programmer API")', done => {
        const req = mockRequest()
        const res = mockResponse()
        base.home(req, res)
        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({
            status: "OK",
            message: "Welcome to cv-programmer API"
        })
        done()
    })
})