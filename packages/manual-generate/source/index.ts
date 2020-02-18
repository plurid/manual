import program, {
    CommanderStatic,
} from 'commander';



const processArgs = (
    program: CommanderStatic,
) => {
    console.log(program);
}


const main = async (
    program: CommanderStatic,
) => {
    program
        .version('0.1.0', '-v, --version');

    if (process.argv.length > 2) {
        program
            .action(() => {
                processArgs(program);
            });
    }

    program.parse(process.argv);
}


main(program);
