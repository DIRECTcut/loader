export default function* percentCompleteCounter(num: number) {
    for (let i = 1; i <= num; i++) {
        const percentPerFile = 100 / num

        yield Math.floor(percentPerFile * i)
    }
}