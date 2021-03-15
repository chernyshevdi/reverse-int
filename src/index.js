module.exports = function reverse (n) {
    let q = String(n).split('').reverse();
    let w = q.filter(function(number) {
      return number >= 0
    })
    let e = w.join('')
    return Number(e)
}
