import React, {
    // useState,
    // useEffect,
} from 'react';

import ManualApp from '@plurid/manual-react';

import data from './testdata/data/@plurid/plurid-react-small.json';



const App = () => {
    const modules = [
        {
            id: 'one',
            elements: [],
        },
    ];

    const metadata = {
        name: '@plurid/plurid-react',
    };

    return (
        <div>
            <ManualApp
                modules={modules}
                metadata={metadata}
                data={[data]}
            />
        </div>
    );
}


export default App;
