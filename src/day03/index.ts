import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  var totalPriority = 0;

  input.forEach((value) => {
    const firstHalf = value.substring(0, value.length / 2);
    const secondHalf = value.substring(value.length / 2);
    totalPriority += GetPriority(findOverlapping(firstHalf, secondHalf));
  });

  return totalPriority;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  var totalPriority = 0;
  for (let i = 0; i < input.length; i = i + 3) {
    const firstBag = input[i];
    const secondBag = input[i + 1];
    const thirdBag = input[i + 2];
    for (var potentialBadge of firstBag) {
      if (
        secondBag.includes(potentialBadge) &&
        thirdBag.includes(potentialBadge)
      ) {
        totalPriority += GetPriority(potentialBadge);
        break;
      }
    }
  }

  return totalPriority;
};

const findOverlapping = (first: string, second: string) => {
  for (var i of first) {
    if (second.includes(i)) return i;
  }
  for (var i of second) {
    if (first.includes(i)) return i;
  }
  return "";
};

const GetPriority: (input: string) => number = (input: string) => {
  return (
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(input) + 1
  );
};

run({
  part1: {
    tests: [
      {
        input: `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
