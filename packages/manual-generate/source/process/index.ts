import path from 'path';
import fs from 'fs';

import {
    CommanderStatic,
} from 'commander';

import {
    ManualGenerate,
} from '../data/interfaces';



const handlePackages = (
    data: ManualGenerate,
) => {
    const directoryPath = path.join(process.cwd(), data.target);

    if (!fs.existsSync(directoryPath)){
        fs.mkdirSync(directoryPath);
    }

}


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
            handlePackages(data);
        } catch (error) {
            console.log(`\n\tSomething Went Wrong\n\n\tCheck the generation file:\n\t${filepath}\n`);
        }
    }
}


export default processArguments;
