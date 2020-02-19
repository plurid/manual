import path from 'path';
import fs, {
    promises as asyncfs,
} from 'fs';

import {
    CommanderStatic,
} from 'commander';

import pacote from 'pacote';

import typedoc from 'typedoc';

import {
    ManualGenerate,
} from '../data/interfaces';



/**
 * List all files in a directory in Node.js recursively in a synchronous fashion
 * https://gist.github.com/kethinov/6658166
 *
 * @param dir
 * @param filelist
 */
const walkSync = (
    dir: string,
    filelist: any[],
) => {
    const files = fs.readdirSync(dir);
    filelist = filelist || [];

    files.forEach(function(file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = walkSync(path.join(dir, file), filelist);
        }
        else {
            filelist.push(path.join(dir, file));
        }
    });

    return filelist;
};


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

        await createGitIgnore(directoryPath);
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
    const typedocApp = new typedoc.Application();

    for (const packagePath of packagePaths) {
        const packageDocs = path.join(directoryPath, `/docs/${packagePath}`);
        const packageFiles = walkSync(packagePath, []);
        const filteredPackageFiles = packageFiles.filter(packageFile => {
            const extension = path.extname(packageFile);

            if (extension === '.ts' || extension === '.tsx' || extension === '.d.ts') {
                return true;
            }

            return false;
        });

        typedocApp.generateJson(filteredPackageFiles, packageDocs);
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
