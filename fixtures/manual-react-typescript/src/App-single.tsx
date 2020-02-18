import React, {
    // useState,
    // useEffect,
} from 'react';

import ManualApp from '@plurid/manual-react';

// import Page1 from './containers/Page1';
// import Page2 from './containers/Page2';



const App = () => {
    const modules = [
        {
            elements: [],
        },
    ];

    const metadata = {
        name: 'one',
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
