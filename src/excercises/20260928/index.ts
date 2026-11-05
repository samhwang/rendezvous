export function temperatureDrop(temps: number[], drop: number): number[] {
  return temps.map((value, index) => {
    if (index === temps.length - 1) {
      return 0;
    }

    const remainingNums = temps.slice(index + 1);
    let countDays = 0;
    for (let remainingIndex = 0; remainingIndex < remainingNums.length; remainingIndex++) {
      const num = remainingNums[remainingIndex];
      countDays++;

      if (num <= value - drop) {
        break;
      }

      if (remainingIndex === remainingNums.length - 1) {
        countDays = 0;
      }
    }

    return countDays;
  });
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe('Temperature drop', () => {
    it.each<[number[], number, number[]]>([
      [[70, 68, 72, 60, 65, 55], 5, [3, 2, 1, 2, 1, 0]],
      [[50, 49, 48], 5, [0, 0, 0]],
      [[40, 30, 45, 20], 10, [1, 2, 1, 0]],
    ])('Should output the correct temp drop', (input, threshold, expected) => {
      expect(temperatureDrop(input, threshold)).toEqual(expected);
    });
  });
}
