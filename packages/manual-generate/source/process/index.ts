import path from 'path';
import fs, {
    promises as asyncfs,
} from 'fs';

import {
    CommanderStatic,
} from 'commander';

import pacote from 'pacote';

import {
    ManualGenerate,
} from '../data/interfaces';



const createGitIgnore = async (
    directoryPath: string,
) => {
    const gitIgnorePath = path.join(directoryPath, '/.gitignore');

    if (!fs.existsSync(gitIgnorePath)){
        await asyncfs.writeFile(gitIgnorePath, 'packages');
    }
}


const handlePackages = async (
    data: ManualGenerate,
) => {
    const directoryPath = path.join(process.cwd(), data.target);

    if (!fs.existsSync(directoryPath)){
        console.log(`\n\tCreated directory: ${directoryPath}`);

        fs.mkdirSync(directoryPath);
        createGitIgnore(directoryPath);
    }

    const packagePaths = [];

    for (const dataPackage of data.packages) {
        const packagePath = path.join(directoryPath, `/packages/${dataPackage}`);
        packagePaths.push(packagePath);

        console.log(`\n\tDownloading package ${dataPackage}`);

        await pacote.extract(dataPackage, packagePath);
    }

    console.log(`\n`);

    // parse downloaded packages

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
