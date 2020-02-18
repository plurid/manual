import program, {
    CommanderStatic,
} from 'commander';

import processArguments from './process';



const main = async (
    program: CommanderStatic,
) => {
    program
        .version('0.1.0', '-v, --version');

    if (process.argv.length > 2) {
        program
            .action(() => {
                processArguments(program);
            });
    }

    program.parse(process.argv);
}


main(program);
