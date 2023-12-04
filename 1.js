const inputArr = require("fs").readFileSync("1.txt", 'utf8').split(/\r?\n/)

// Part 1
console.log(inputArr.reduce( (sum, line) => sum + parseInt(`${line.match(/\d/g)[0]}${line.match(/\d/g)[line.match(/\d/g).length - 1]}`), 0))


// Part 2
const pairs = inputArr.map((line) => {
  const matches = line.match(/one|two|three|four|five|six|seven|eight|nine|\d/g)
  return [matches[0], matches[matches.length - 1]]
})

const numStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const ints = pairs.map((pair) => {
 return parseInt(`${/\d/.test(pair[0]) ? pair[0] : numStrings.indexOf(pair[0])}${/\d/.test(pair[1]) ? pair[1] : numStrings.indexOf(pair[1])}`)
})

console.log(ints.reduce((sum, n) => sum + n, 0))