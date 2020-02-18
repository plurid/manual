import path from 'path';

import {
    CommanderStatic,
} from 'commander';

import {
    ManualGenerate,
} from '../data/interfaces';



const processArguments = async (
    program: CommanderStatic,
) => {
    const {
        args,
    } = program;

    const file = args[0];

    if (file) {
        const filepath = path.join(process.cwd(), file);

        try {
            const data: ManualGenerate = require(filepath);
            console.log(data);
        } catch (error) {
            console.log(`\n\tSomething Went Wrong\n\n\tCheck the generation file:\n\t${filepath}\n`);
        }
    }
}


export default processArguments;
