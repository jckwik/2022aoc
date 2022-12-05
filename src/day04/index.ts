import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  var overlappingPairs = 0;
  input.forEach((value) => {
    const inputSplit = value.split(/[-,]/);
    //console.log(inputSplit);
    const firstStart = parseInt(inputSplit[0]);
    const firstEnd = parseInt(inputSplit[1]);
    const secondStart = parseInt(inputSplit[2]);
    const secondEnd = parseInt(inputSplit[3]);
    if (
      (secondStart >= firstStart &&
        secondStart <= firstEnd &&
        secondEnd <= firstEnd) ||
      (firstStart >= secondStart &&
        firstStart <= secondEnd &&
        firstEnd <= secondEnd)
    ) {
      //console.log("overlapping");
      overlappingPairs++;
    }
  });

  return overlappingPairs;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  var overlappingPairs = 0;
  input.forEach((value) => {
    const inputSplit = value.split(/[-,]/);
    //console.log(inputSplit);
    const firstStart = parseInt(inputSplit[0]);
    const firstEnd = parseInt(inputSplit[1]);
    const secondStart = parseInt(inputSplit[2]);
    const secondEnd = parseInt(inputSplit[3]);
    if (
      (secondStart >= firstStart && secondStart <= firstEnd) ||
      (secondEnd >= firstStart && secondEnd <= firstEnd) ||
      (firstStart >= secondStart && firstStart <= secondEnd) ||
      (firstEnd >= secondStart && firstEnd <= secondEnd)
    ) {
      //console.log("overlapping");
      overlappingPairs++;
    }
  });

  return overlappingPairs;
};

run({
  part1: {
    tests: [
      {
        input: `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
        expected: 2,
      },
      {
        input: `71-97,71-72
60-97,20-95
20-59,58-59
24-83,3-82
48-96,33-47
49-49,10-50
48-86,6-85
71-72,27-72
46-83,29-84
10-52,1-53`,
        expected: 6,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
