import { parseDate, scaffoldFolder } from './scaffold';

const [, , yyyymmdd] = process.argv;

if (!yyyymmdd) {
  console.error('Usage: pnpm run scaffold <yyyymmdd>');
  process.exit(1);
}

try {
  const parsedDate = parseDate(yyyymmdd);
  console.log(`Scaffolding template to excercises/${yyyymmdd}`);
  scaffoldFolder(parsedDate);
  console.log('Done!');
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
