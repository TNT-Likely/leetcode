const LexicographicOrder = (a, b) => {
    const m = a.length
    const n = b.length

    let i = 0
    while (i < m || i < n) {
        if (a[i] === b[i]) {
            i++
        } else {
            return a.charCodeAt(i) - b.charCodeAt(i)
        }
    }

    return 0
}

module.exports = LexicographicOrder