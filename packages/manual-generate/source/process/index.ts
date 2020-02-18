import path from 'path';

import {
    CommanderStatic,
} from 'commander';



const processArguments = async (
    program: CommanderStatic,
) => {
    const {
        args,
    } = program;

    const file = args[0];

    if (file) {
        const filepath = path.join(process.cwd(), file);
        const data = require(filepath);
        console.log(data);
    }
}


export default processArguments;
