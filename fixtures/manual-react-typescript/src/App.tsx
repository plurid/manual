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

    const data: ManualData[] = [
        pluridReactData,
    ];

    const metadata: ManualMetadata = {
        name: '@plurid/plurid-react',
    };

    return (
        <div>
            <ManualApp
                modules={modules}
                data={data}
                metadata={metadata}
            />
        </div>
    );
}


export default App;
