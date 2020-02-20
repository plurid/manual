import React from 'react';

import ManualApp, {
    ManualModule,
    ManualMetadata,
    ManualData,
} from '@plurid/manual-react';

import pluridReactData from './testdata/data/@plurid/plurid-react-small.json';



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

    const data: ManualData.ProjectReflection[] = [
        pluridReactData,
    ];

    return (
        <div>
            <ManualApp
                modules={modules}
                metadata={metadata}
                data={data}
            />
        </div>
    );
}


export default App;
