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


interface Package {
    name: string;
    path: string;
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


    /**
     * Download packages
     */
    const packages: Package[] = [];

    for (const packageName of data.packages) {
        const packagePath = path.join(directoryPath, `/packages/${packageName}`);
        const packageData = {
            name: packageName,
            path: packagePath,
        };
        packages.push(packageData);

        console.log(`\n\tDownloading package ${packageName}`);

        await pacote.extract(packageName, packagePath);
    }

    console.log(`\n`);


    /**
     * Parse downloaded packages.
     */
    for (const packageData of packages) {
        const dataPath = path.join(directoryPath, `/data/${packageData.name}.json`);
        const packageFiles = walkSync(packageData.path, []);
        const filteredPackageFiles = packageFiles.filter(packageFile => {
            const extension = path.extname(packageFile);

            if (extension === '.ts' || extension === '.tsx' || extension === '.d.ts') {
                return true;
            }

            return false;
        });

        console.log(`\n\tExtracting documentation data for package ${packageData.name}`);

        const typedocApp = new typedoc.Application();
        typedocApp.bootstrap({
            ignoreCompilerErrors: true,
            logger: 'none',
        });
        typedocApp.generateJson(filteredPackageFiles, dataPath);

        console.log(`\n\tExtracted documentation data for package ${packageData.name} to:`);
        console.log(`\t${dataPath}`);
    }

    console.log(`\n`);
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
