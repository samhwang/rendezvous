import { program } from 'commander';
import { isValidDate, scaffoldFolder } from './scaffold';

program
  .command('scaffold [ddmmyyyy]')
  .description('Scaffold a new folder with the given date')
  .action((ddmmyyyy: string) => {
    console.log(`Creating folder for ${ddmmyyyy}`);
    isValidDate(ddmmyyyy);
    console.log(`Scaffolding template to excercises/${ddmmyyyy}`);
    scaffoldFolder(ddmmyyyy);
    console.log('Done!');
  })
  .version('0.0.1', '-v, --version', 'output the current version')
  .parse(process.argv);
