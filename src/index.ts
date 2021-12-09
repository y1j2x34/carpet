import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
    .command(
        'convert <files...> [format]',
        'convert coverage report format',
        yargs => {
            return yargs
                .positional('files', {
                    description: 'A list of coverage report files to be converted'
                })
                .positional('format', {
                    type: 'string',
                    choices: [
                        'json',
                        'html',
                        'lcov',
                        'lcovonly',
                        'cobertura',
                        'clover',
                        'html-spa',
                        'teamcity',
                        'text'
                    ],
                    description: 'target coverage format'
                });
        },
        args => {
            console.log('execute convert', args);
        }
    )
    .parse();
