import { getFileNameFromUrl } from "../src/utils"
import { describe } from 'mocha'
import { expect } from 'chai'

describe('#getFileNameFromUrl', () => {
    it('should exist', () => expect(typeof getFileNameFromUrl).to.be.eql('function'))

    it('should return filename from url provided', () => {
        expect(getFileNameFromUrl('http://speed.hetzner.de/50MB.bin')).to.eql('50MB.bin')
        expect(getFileNameFromUrl('http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg')).to.eql('mqdefault.jpg')
        expect(getFileNameFromUrl('http://speed.hetzner.de/100MB.bin?q=query')).to.eql('100MB.bin')
        expect(getFileNameFromUrl('http://speed.hetzner.de/200MB')).to.eql('200MB')
    })
})