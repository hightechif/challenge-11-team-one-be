const base = require('../../controllers/baseController.js')
const mockRequest = (body = {}) => ({ body })
const mockResponse = () => {
    const res = {}
    res.json = jest.fn().mockRetrunValue(res)
    res.status = jest.fn().mockReturnValue(res)
    return res
}
describe('base.index function', () => {
    test('res.json called with { status: true, message: "Hello World")', done => {
        const req = mockRequest()
        const res = mockResponse()
        base.index(req, res)
        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({
            status: true,
            message: "Hello World!"
        })
        done()
    })
})