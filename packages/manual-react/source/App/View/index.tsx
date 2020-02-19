import React, {
    useEffect,
    // useState,
    // useCallback,
    useRef,
} from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

// import Hammer from 'hammerjs';

import {
    ManualAppProperties,
} from '@plurid/manual-data';

// import {
//     meta,
// } from '@plurid/plurid-functions';

// import themes, {
//     Theme,
//     THEME_NAMES,
// } from '@plurid/plurid-themes';

import './index.css';

import {
    StyledView,
    // GlobalStyle,
} from './styled';

// import handleView from './logic';

import Space from '../../modules/containers/Space';

import ToolbarMetadata from '../../modules/components/ToolbarMetadata';

import { AppState } from '../../modules/services/state/store';
// import selectors from '../../modules/services/state/selectors';
import actions from '../../modules/services/state/actions';

import StateContext from '../../modules/services/state/context';



export interface ViewOwnProperties {
    appProperties: ManualAppProperties;
}

interface ViewStateProperties {
}

interface ViewDispatchProperties {
    dispatch: ThunkDispatch<{}, {}, AnyAction>;
    dispatchSetMetadata: typeof actions.data.setMetadata;
}

type ViewProperties = ViewOwnProperties
    & ViewStateProperties
    & ViewDispatchProperties;

const View: React.FC<ViewProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        appProperties,

        /** state */

        /** dispatch */
        // dispatch,
        dispatchSetMetadata,
    } = properties;

    const {
        // modules,
        metadata,
    } = appProperties;


    /** references */
    const viewElement = useRef<HTMLDivElement>(null);


    /** state */


    /** callbacks */


    /** effects */
    /** Handle Metadata */
    useEffect(() => {
        dispatchSetMetadata(metadata);
    }, [
        metadata,
    ]);


    /** render */
    // const viewContainer = handleView();

    return (
        <StyledView
            ref={viewElement}
            tabIndex={0}
        >
            <ToolbarMetadata />

            <Space />

            {/* {!spaceLoading && (
                <>
                    <GlobalStyle />

                    <Context.Provider
                        value={pluridContext}
                    >
                        {viewContainer}
                    </Context.Provider>
                </>
            )} */}
        </StyledView>
    );
}


const mapStateToProperties = (
    state: AppState,
): ViewStateProperties => ({
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ViewDispatchProperties => ({
    dispatch,
    dispatchSetMetadata: (
        payload,
    ) => dispatch(
        actions.data.setMetadata(payload),
    ),
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(View);
