import path from 'path'

export function getFileNameFromUrl(src: string): string {
    const url = new URL(src)

    return path.basename(url.pathname)
}