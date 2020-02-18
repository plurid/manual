import React from 'react';

import {
    ManualAppProperties,
} from '@plurid/manual-data';

import Root from './Root';

import store from '../modules/services/state/store';



const initialState = {};
const initializedStore = store(initialState);

const PluridApp: React.FC<ManualAppProperties> = (
    properties,
) => {
    return (
        <Root
            store={initializedStore}
            appProperties={properties}
        />
    );
}


export default PluridApp;
