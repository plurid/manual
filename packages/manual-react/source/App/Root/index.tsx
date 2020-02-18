import React from 'react';

import { Store, AnyAction } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';

import {
    ManualProperties,
} from '@plurid/manual-data';

import View from '../View';

import {
    AppState,
} from '../../modules/services/state/store';
import StateContext from '../../modules/services/state/context';



interface RootProperties {
    store: Store<AppState, AnyAction>;
    appProperties: ManualProperties;
}

const Root: React.FC<RootProperties> = (
    properties,
) => {
    /** properties */
    const {
        store,
        appProperties,
    } = properties;


    /** render */
    return (
        <ReduxProvider
            store={store}
            context={StateContext}
        >
            <View
                appProperties={appProperties}
            />
        </ReduxProvider>
    );
}


export default Root;
