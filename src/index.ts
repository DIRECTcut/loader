import { config } from 'dotenv'
import loader from './loader'
import path from 'path'
import fs from 'fs'

config()

const lightUrls = [
    "http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg",
    "http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg",
    "http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg",
    "http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg",
]

const heavyUrls = [
    "http://speed.hetzner.de/50MB.bin",
    "http://speed.hetzner.de/50MB.bin",
    "http://speed.hetzner.de/50MB.bin",
]

const destination = path.join(__dirname, '..', 'dest')

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, {recursive: true, mode: 0o744});
}

loader(heavyUrls, destination)
    .catch(err => console.error(err.message))
