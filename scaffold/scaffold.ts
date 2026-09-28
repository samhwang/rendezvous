import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dateFormatRegex = /^\d{2}\d{2}\d{4}$/g;

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export interface ParsedDate {
  day: string;
  month: string;
  year: string;
}

export function parseDate(dateInput: string): ParsedDate {
  const match = dateInput.match(dateFormatRegex);
  if (!match) {
    throw new Error(`Invalid date format. Correct format is yyyymmdd. Input: ${dateInput}`);
  }
  const year = dateInput.slice(0, 4);
  const leapYear = isLeapYear(Number.parseInt(year));

  const month = dateInput.slice(4, 6);
  const monthAsNumber = Number.parseInt(month);
  if (monthAsNumber > 12) {
    throw new Error(`Invalid month. Month should be less than 12. Input: ${month}`);
  }

  const day = dateInput.slice(6, 8);
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

  return { day, month, year };
}

export function scaffoldFolder(parsedDate: ParsedDate): void {
  const day = parsedDate.day.padStart(2, '0');
  const month = parsedDate.month.padStart(2, '0');
  const year = parsedDate.year.padStart(4, '0');

  const folderPath = path.join(__dirname, '..', 'excercises', `${year}${month}${day}`);
  const templatePath = path.join(__dirname, 'template');
  const folderExists = fs.existsSync(folderPath);
  if (!folderExists) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
  fs.cpSync(templatePath, folderPath, { recursive: true });

  const readmePath = path.join(folderPath, 'README.md');
  const readmeContent = fs.readFileSync(readmePath, 'utf8');
  fs.writeFileSync(readmePath, readmeContent.replace('{{DATE}}', `${day}/${month}/${year}`));
}
