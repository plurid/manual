import React from 'react';

import ManualApp, {
    ManualModule,
    ManualMetadata,
    // ManualData,
    // ManualElementKind,
} from '@plurid/manual-react';

// import {
//     JSONOutput,
// } from 'typedoc';

import pluridReactData from './testdata/data/@plurid/plurid-react-small.json';


// console.log(ManualElementKind);

const App = () => {
    const modules: ManualModule[] = [
        {
            id: 'one',
            elements: [],
        },
    ];

    const metadata: ManualMetadata = {
        name: '@plurid/plurid-react',
    };

    // const data: JSONOutput.ProjectReflection[] = [
    //     pluridReactData,
    // ];

    // const data: ManualData.ProjectReflection[] = [
    //     pluridReactData,
    // ];

    // const a = 128;

    // if (a === ManualElementKind.Class) {
    //     console.log('ffooo');
    // }

    return (
        <div>
            <ManualApp
                modules={modules}
                metadata={metadata}
                data={[pluridReactData]}
                // data={data}
            />
        </div>
    );
}


export default App;
