import http from 'http'
import path from 'path'
import { getFileNameFromUrl } from './utils'
import fs from 'fs'

export default function createDownStream(res: http.IncomingMessage, outDir: string, url: string, percentCounter: Generator) {
    const downloadPath = path.join(outDir, getFileNameFromUrl(url))
    const file = fs.createWriteStream(downloadPath)

    return res.pipe(file)
        .on('finish', () => console.info(`Completed ${percentCounter.next().value} %`))
        .on('error', (err) => console.error(err.message))
}
