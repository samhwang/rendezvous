import fs from 'node:fs';
import path from 'node:path';

const dateFormatRegex = /^\d{2}\d{2}\d{4}$/g;

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function isValidDate(dateInput: string): void {
  const match = dateInput.match(dateFormatRegex);
  if (!match) {
    throw new Error(`Invalid date format. Correct format is ddmmyyyy. Input: ${dateInput}`);
  }
  const year = dateInput.slice(4);
  const leapYear = isLeapYear(Number.parseInt(year));

  const month = dateInput.slice(2, 4);
  const monthAsNumber = Number.parseInt(month);
  if (monthAsNumber > 12) {
    throw new Error(`Invalid month. Month should be less than 12. Input: ${month}`);
  }

  const day = dateInput.slice(0, 2);
  const dayAsNumber = Number.parseInt(day);
  switch (monthAsNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (dayAsNumber > 31) {
        throw new Error(`Invalid day. Day should be less than 31. Input: ${day}`);
      }
      break;

    case 2:
      if (leapYear && dayAsNumber > 29) {
        throw new Error(`Invalid day. Day should be less than 29. Input: ${day}`);
      }

      if (dayAsNumber > 28) {
        throw new Error(`Invalid day. Day should be less than 28. Input: ${day}`);
      }
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      if (dayAsNumber > 30) {
        throw new Error(`Invalid day. Day should be less than 30. Input: ${day}`);
      }
      break;

    default:
      throw new Error(`Invalid month. Input: ${month}`);
  }

  return;
}

export function scaffoldFolder(dateInput: string): void {
  const folderPath = path.join(__dirname, '..', 'excercises', dateInput);
  const templatePath = path.join(__dirname, 'template');
  const folderExists = fs.existsSync(folderPath);
  if (!folderExists) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  fs.cpSync(templatePath, folderPath, { recursive: true });
}
