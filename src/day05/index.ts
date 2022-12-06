import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const platformFloor = input.findIndex((value) => value.includes("1"));
  console.log(platformFloor);
  const columns = [] as String[][];
  columns[0] = [];
  columns[1] = [];
  columns[2] = [];
  columns[3] = [];
  columns[4] = [];
  columns[5] = [];
  columns[6] = [];
  columns[7] = [];
  columns[8] = [];
  for (var i = platformFloor - 1; i >= 0; i--) {
    if (input[i].charAt(1) !== " ") columns[0].push(input[i].charAt(1));
    if (input[i].charAt(5) !== " ") columns[1].push(input[i].charAt(5));
    if (input[i].charAt(9) !== " ") columns[2].push(input[i].charAt(9));
    if (input[i].charAt(13) !== " ") columns[3].push(input[i].charAt(13));
    if (input[i].charAt(17) !== " ") columns[4].push(input[i].charAt(17));
    if (input[i].charAt(21) !== " ") columns[5].push(input[i].charAt(21));
    if (input[i].charAt(25) !== " ") columns[6].push(input[i].charAt(25));
    if (input[i].charAt(29) !== " ") columns[7].push(input[i].charAt(29));
    if (input[i].charAt(33) !== " ") columns[8].push(input[i].charAt(33));
  }
  console.log(columns);

  const move = [];
  const from = [];
  const to = [];

  for (var i = platformFloor + 2; i < input.length; i++) {
    const numbers = input[i].match(/move (\d*) from (\d*) to (\d*)/);
    if (numbers !== null) {
      move.push(parseInt(numbers[1]));
      from.push(parseInt(numbers[2]));
      to.push(parseInt(numbers[3]));
    }
  }

  for (var moveNum = 0; moveNum < move.length; moveNum++) {
    for (var moveIterator = 0; moveIterator < move[moveNum]; moveIterator++) {
      const moved = columns[from[moveNum] - 1].pop();
      if (moved !== undefined) columns[to[moveNum] - 1].push(moved);
    }
  }

  var output = "";
  columns.forEach((value) => {
    const outnow = value.pop();
    if (outnow !== undefined) output = output.concat(outnow.toString());
  });

  return output;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const platformFloor = input.findIndex((value) => value.includes("1"));
  console.log(platformFloor);
  const columns = ["", "", "", "", "", "", "", "", ""] as String[];
  for (var i = platformFloor - 1; i >= 0; i--) {
    if (input[i].charAt(1) !== " ")
      columns[0] = columns[0].concat(input[i].charAt(1));
    if (input[i].charAt(5) !== " ")
      columns[1] = columns[1].concat(input[i].charAt(5));
    if (input[i].charAt(9) !== " ")
      columns[2] = columns[2].concat(input[i].charAt(9));
    if (input[i].charAt(13) !== " ")
      columns[3] = columns[3].concat(input[i].charAt(13));
    if (input[i].charAt(17) !== " ")
      columns[4] = columns[4].concat(input[i].charAt(17));
    if (input[i].charAt(21) !== " ")
      columns[5] = columns[5].concat(input[i].charAt(21));
    if (input[i].charAt(25) !== " ")
      columns[6] = columns[6].concat(input[i].charAt(25));
    if (input[i].charAt(29) !== " ")
      columns[7] = columns[7].concat(input[i].charAt(29));
    if (input[i].charAt(33) !== " ")
      columns[8] = columns[8].concat(input[i].charAt(33));
  }
  console.log(columns);

  const move = [];
  const from = [];
  const to = [];

  for (var i = platformFloor + 2; i < input.length; i++) {
    const numbers = input[i].match(/move (\d*) from (\d*) to (\d*)/);
    if (numbers !== null) {
      move.push(parseInt(numbers[1]));
      from.push(parseInt(numbers[2]));
      to.push(parseInt(numbers[3]));
    }
  }

  for (var moveNum = 0; moveNum < move.length; moveNum++) {
    const toMove = columns[from[moveNum] - 1].slice(0 - move[moveNum]);
    columns[from[moveNum] - 1] = columns[from[moveNum] - 1].slice(
      0,
      0 - move[moveNum],
    );
    columns[to[moveNum] - 1] = columns[to[moveNum] - 1].concat(toMove);
  }

  var output = "";
  columns.forEach((value) => {
    output = output.concat(value.slice(-1));
  });

  return output;
};

run({
  part1: {
    tests: [
      {
        input: `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
        expected: "CMZ",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
        expected: "MCD",
      },
    ],
    solution: part2,
  },
  trimTestInputs: false,
  onlyTests: false,
});
