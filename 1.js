const inputArr = require("fs").readFileSync("1.txt", 'utf8').split(/\r?\n/)

// Part 1
console.log(inputArr.reduce( (sum, line) => sum + parseInt(`${line.match(/\d/g)[0]}${line.match(/\d/g)[line.match(/\d/g).length - 1]}`), 0))


// Part 2
const numStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

const day2Sum = inputArr.reduce((sum, line) => {
  const matches = line.match(/one|two|three|four|five|six|seven|eight|nine|\d/g)
  return sum + parseInt(`${/\d/.test(matches[0]) ? matches[0] : numStrings.indexOf(matches[0])}${/\d/.test(matches[matches.length - 1]) ? matches[matches.length - 1] : numStrings.indexOf(matches[matches.length - 1])}`)
}, 0)

console.log(day2Sum)