import React, {
    // useState,
    // useEffect,
} from 'react';

import ManualApp from '@plurid/manual-react';



const App = () => {
    const modules = [
        {
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
            />
        </div>
    );
}


export default App;
