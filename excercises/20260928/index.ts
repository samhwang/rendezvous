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
