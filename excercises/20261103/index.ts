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
  let pastHourMin: HHMM = { hour: 0, minute: 0 };

  return input.reduce((accumulator, timeInput, index) => {
    const currentHourMin = parseHour(timeInput);
    if (index === 0) {
      pastHourMin = currentHourMin;
      return accumulator;
    }

    const pastTime = parseHHMMintoDate(pastHourMin, pastDaylightSaving);

    if (!pastDaylightSaving) {
      pastDaylightSaving = currentHourMin.hour < pastHourMin.hour || (currentHourMin.hour === pastHourMin.hour && currentHourMin.minute < pastHourMin.minute);
    }

    const currentTime = parseHHMMintoDate(currentHourMin, pastDaylightSaving);
    const duration = currentTime.valueOf() - pastTime.valueOf();

    pastHourMin = currentHourMin;
    return accumulator + Math.round(duration / 1000 / 60);
  }, 0);
}
