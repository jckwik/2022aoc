import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput.split("\n");

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  var totalScore = 0;
  input.forEach((value) => {
    const plays = value.split(" ");
    const theirPlay = TranslatePlay(plays[0]);
    const myPlay = TranslatePlay(plays[1]);
    totalScore += RPSOutcome(myPlay, theirPlay);
    totalScore += myPlay;
  });

  return totalScore;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  var totalScore = 0;
  input.forEach((value) => {
    const plays = value.split(" ");
    const theirPlay = TranslatePlay(plays[0]);
    const myMove = plays[1];
    //2>1
    //3>2
    //1>3
    //win
    if (myMove === "Z") {
      var newMove = theirPlay + 1;
      if (newMove > 3) newMove -= 3;
      totalScore += newMove + 6;
    }
    //lose
    else if (myMove === "X") {
      var newMove = theirPlay - 1;
      if (newMove < 1) newMove += 3;
      totalScore += newMove + 0;
    }
    //draw
    else if (myMove === "Y") {
      totalScore += theirPlay + 3;
    }
  });

  return totalScore;
};

const TranslatePlay = (input: string) => {
  if (input === "A" || input === "X") return 1;
  if (input === "B" || input === "Y") return 2;
  if (input === "C" || input === "Z") return 3;
  else return 0;
};

const RPSOutcome = (yourPlay: number, theirPlay: number) => {
  if (yourPlay === theirPlay) return 3;
  if (
    (yourPlay === 2 && theirPlay === 1) ||
    (yourPlay === 3 && theirPlay === 2) ||
    (yourPlay === 1 && theirPlay === 3)
  )
    return 6;
  if (
    (yourPlay === 2 && theirPlay === 3) ||
    (yourPlay === 3 && theirPlay === 1) ||
    (yourPlay === 1 && theirPlay === 2)
  )
    return 0;
  return 0;
};

run({
  part1: {
    tests: [
      {
        input: `A Y
B X
C Z`,
        expected: 15,
      },
      {
        input: `A Y
B Z
C Z`,
        expected: 23,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `A Y
B X
C Z`,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
