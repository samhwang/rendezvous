export function comebackRound(input: number[][]): number {
  let comebackRoundIndex = 0;
  let currentWinner = -1;
  let maxWins = 0;
  let maxWinOccurences = 0;

  const scoreMap = new Map<number, number>();
  input.forEach((game, roundIndex) => {
    const winnerScore = Math.max(...game);
    const winnerIndex = game.findIndex((score) => score === winnerScore);
    if (currentWinner !== winnerIndex) {
      currentWinner = winnerIndex;
      comebackRoundIndex = roundIndex + 1;
    }

    const winCount = scoreMap.get(winnerIndex) ?? 0;
    scoreMap.set(winnerIndex, winCount + 1);

    if (winCount + 1 > maxWins) {
      maxWins = winCount + 1;
      maxWinOccurences = 1;
    } else if (winCount + 1 === maxWins) {
      maxWins = winCount + 1;
      maxWinOccurences += 1;
    }

    return scoreMap;
  });

  if (maxWinOccurences > 1) {
    return -1;
  }

  return comebackRoundIndex;
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe('comeback round', () => {
    it.each<[number[][], number]>([
      [
        [
          [5, 3, 2],
          [0, 5, 2],
          [4, 2, 2],
          [1, 3, 0],
        ],
        -1,
      ],
      [
        [
          [4, 2],
          [1, 3],
          [2, 1],
        ],
        3,
      ],
      [
        [
          [4, 2],
          [1, 3],
        ],
        -1,
      ],
    ])('Should solve the problem correctly', (input, output) => {
      expect(comebackRound(input)).toEqual(output);
    });
  });
}
