import loader from '../src/loader'
import sinon from 'sinon'
import http from 'http'
import { expect } from 'chai'

describe('loader', () => {
    let urls: string[], outDir: string

    before(() => {
        urls = ['http://internet.com/foo', 'http://internet.com/bar']
        outDir = '/dir'
    })
    
    it('makes an http GET request per url provided', () => {
        const httpStub = sinon.spy(http, 'get')

        return loader(urls, outDir).then(() => {
            expect(httpStub.calledTwice).to.be.true
            expect(httpStub.calledWith(urls[0])).to.be.true
            expect(httpStub.calledWith(urls[1])).to.be.true
        })
    })

    it('logs a message before downloading files', () => {
        const consoleSpy = sinon.spy(console, 'log')

        return loader(urls, outDir).then(() => {
            expect(consoleSpy.calledOnce).to.be.true
            expect(consoleSpy.calledWith(`Downloading 2 file(s)`)).to.be.true
        })
    })
})