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
  let total = 0;

  // Setup first record
  const firstHourMin = parseHour(input[0]);

  let pastHourMin = firstHourMin;

  for (let i = 1; i < input.length; i++) {
    const pastTime = parseHHMMintoDate(pastHourMin, pastDaylightSaving);
    // parse current time
    const currentHourMin = parseHour(input[i]);

    // Check for daylight saving
    if (!pastDaylightSaving) {
      pastDaylightSaving = currentHourMin.hour < pastHourMin.hour || (currentHourMin.hour === pastHourMin.hour && currentHourMin.minute < pastHourMin.minute);
    }

    const currentTime = parseHHMMintoDate(currentHourMin, pastDaylightSaving);

    const duration = currentTime.valueOf() - pastTime.valueOf();
    total += Math.round(duration / 1000 / 60);

    // last record, don't bother resetting
    if (i === input.length - 1) {
      break;
    }

    // reset the past record for next calculation
    pastHourMin = currentHourMin;
  }
  return total;
}
