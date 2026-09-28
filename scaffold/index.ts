import { isValidDate, scaffoldFolder } from './scaffold';

const [, , ddmmyyyy] = process.argv;

if (!ddmmyyyy) {
  console.error('Usage: pnpm run scaffold <ddmmyyyy>');
  process.exit(1);
}

try {
  isValidDate(ddmmyyyy);
  console.log(`Scaffolding template to excercises/${ddmmyyyy}`);
  scaffoldFolder(ddmmyyyy);
  console.log('Done!');
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
