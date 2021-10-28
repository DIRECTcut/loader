import percentCompleteCounter from '../src/percentCompleteCounter'
import { describe } from 'mocha'
import { expect } from 'chai'

describe('#percentCompleteCounter', () => {
    it('should exist', () => expect(typeof percentCompleteCounter).to.be.eql('function'))

    it('should yield 5 times for 5 files', () => {
        const counter = percentCompleteCounter(5)

        expect(counter.next().value).to.eql(20)
        expect(counter.next().value).to.eql(40)
        expect(counter.next().value).to.eql(60)
        expect(counter.next().value).to.eql(80)
        expect(counter.next().value).to.eql(100)
        expect(counter.next().value).to.be.undefined
    })
})