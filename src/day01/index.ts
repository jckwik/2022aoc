import run from "aocrunner";

const parseInput = (rawInput: string) => {
  return rawInput.split("\n").map((value) => parseInt(value));
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  input.push(NaN);
  let maxCalories = 0;
  let currentCalories = 0;
  for (let count = 0; count < input.length; count++) {
    const cals = input[count];
    if (isNaN(cals)) {
      if (currentCalories > maxCalories) maxCalories = currentCalories;
      currentCalories = 0;
    } else {
      currentCalories += cals;
    }
  }

  return maxCalories;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  input.push(NaN);
  let highCalories = [0, 0, 0];
  let currentCalories = 0;
  for (let count = 0; count < input.length; count++) {
    const cals = input[count];
    if (isNaN(cals)) {
      if (currentCalories > highCalories[2]) {
        highCalories = highCalories.slice(0, 2);
        highCalories.push(currentCalories);
        highCalories.sort((a, b) => b - a);
      }
      currentCalories = 0;
    } else {
      currentCalories += cals;
    }
  }

  return highCalories.reduce((sum, value) => sum + value);
};

run({
  part1: {
    tests: [
      {
        input: `1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000`,
        expected: 24000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000`,
        expected: 45000,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  //onlyTests: true,
});
