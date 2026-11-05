// assuming input will always be hh:mm.

type HHMM = {
  hour: number;
  minute: number;
};

function parseHour(input: string): HHMM {
  const [hour, minute] = input.split(':');
  return {
    hour: Number.parseInt(hour, 10),
    minute: Number.parseInt(minute, 10),
  };
}

function parseHHMMintoDate({ hour, minute }: HHMM, pastDaylightSaving: boolean = false): Date {
  const date = new Date();
  date.setHours(pastDaylightSaving ? hour + 1 : hour);
  date.setMinutes(minute);
  return date;
}

export function elapsedMinutes(input: string[]): number {
  let pastDaylightSaving = false;
  let pastHourMin = parseHour(input[0]);

  return input.slice(1).reduce((accumulator, timeInput) => {
    const currentHourMin = parseHour(timeInput);

    const pastTime = parseHHMMintoDate(pastHourMin, pastDaylightSaving);

    if (!pastDaylightSaving) {
      pastDaylightSaving = currentHourMin.hour < pastHourMin.hour || (currentHourMin.hour === pastHourMin.hour && currentHourMin.minute < pastHourMin.minute);
    }

    const currentTime = parseHHMMintoDate(currentHourMin, pastDaylightSaving);
    const duration = currentTime.valueOf() - pastTime.valueOf();
    const durationMinutes = Math.round(duration / 1000 / 60);

    pastHourMin = currentHourMin;
    return accumulator + durationMinutes;
  }, 0);
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe('Elapsed minute tests', () => {
    it.each<[string[], number]>([
      [['00:50', '01:10', '01:50', '01:10', '02:10'], 140],
      [['01:55', '01:05', '01:25', '01:40'], 45],
    ])('Should calculate the elapsed minutes correctly', (input, output) => {
      expect(elapsedMinutes(input)).toEqual(output);
    });
  });
}
