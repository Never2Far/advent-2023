const inputArr = require("fs").readFileSync("2.txt", 'utf8').split(/\r?\n/).map((line) => line.split(':')[1].split(';').map((pulls) => pulls.split(',').map((pull) => pull.split(' ').slice(1))))

// Part 1
const sum = inputArr.reduce((sum, game, i) => {
  let possible = true;
  game.forEach((round) => {
    round.forEach((pull) => {
      switch (pull[1]) {
        case 'red':
          if (parseInt(pull[0]) > 12) {
            possible = false;
          }
          break;
        case 'green':
          if (parseInt(pull[0]) > 13) {
            possible = false;
          }
          break;

        case 'blue':
          if (parseInt(pull[0]) > 14) {
            possible = false;
          }
          break;
      }
    });
  });

  if (possible) {
    return sum + i + 1;
  } else {
    return sum;
  }
}, 0);

console.log(sum);

// Part 2
const sum2 = inputArr.reduce((sum, game) => {
  const green = [];
  const red = [];
  const blue = [];
  game.forEach((round) => {
    round.forEach((pull) => {
      switch (pull[1]) {
        case 'red':
          red.push(parseInt(pull[0]));
          break;
        case 'green':
          green.push(parseInt(pull[0]));
          break;

        case 'blue':
          blue.push(parseInt(pull[0]));
          break;
      }
    });
  });

  return sum + Math.max(...green) * Math.max(...red) * Math.max(...blue);
}, 0);

console.log(sum2);
