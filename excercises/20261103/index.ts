// assuming input will always be hh:mm.
function parseHour(input: string): { hour: number; minute: number } {
  const [hour, minute] = input.split(':');
  return {
    hour: Number.parseInt(hour, 10),
    minute: Number.parseInt(minute, 10),
  };
}

export function elapsedMinutes(input: string[]): number {
  let pastDaylightSaving = false;
  let total = 0;

  // Setup first record
  const firstHourMin = parseHour(input[0]);
  const firstTime = new Date();
  firstTime.setHours(firstHourMin.hour);
  firstTime.setMinutes(firstHourMin.minute);

  let pastHourMin = firstHourMin;
  let pastTimeValue = firstTime.valueOf();

  for (let i = 1; i < input.length; i++) {
    // parse current time
    const currentHourMin = parseHour(input[i]);

    // Check for daylight saving
    if (!pastDaylightSaving) {
      pastDaylightSaving = currentHourMin.hour < pastHourMin.hour || (currentHourMin.hour === pastHourMin.hour && currentHourMin.minute < pastHourMin.minute);
    }

    const currentTime = new Date();
    currentTime.setHours(pastDaylightSaving ? currentHourMin.hour + 1 : currentHourMin.hour);
    currentTime.setMinutes(currentHourMin.minute);
    const currentTimeValue = currentTime.valueOf();

    const duration = currentTimeValue - pastTimeValue;
    total += Math.round(duration / 1000 / 60);

    // last record, don't bother resetting
    if (i === input.length - 1) {
      break;
    }

    // reset the past record for next calculation
    pastHourMin = currentHourMin;
    pastTimeValue = currentTimeValue;
  }
  return total;
}
