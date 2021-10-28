import http from 'http'
import percentCompleteCounter from './percentCompleteCounter'
import createDownStream from './createDownStream'

export default function loader(srcArr: string[], outDir: string): Promise<http.ClientRequest[]> {
    const filesCount = srcArr.length
    const percentCounter = percentCompleteCounter(filesCount);
    console.log(`Downloading ${filesCount} file(s)`)

    const res = srcArr.map(url => http.get(url, res => createDownStream(res, outDir, url, percentCounter)))

    return Promise.all(res)
}
