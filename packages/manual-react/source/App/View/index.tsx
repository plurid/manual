import React, {
    // useEffect,
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

import { AppState } from '../../modules/services/state/store';
// import selectors from '../../modules/services/state/selectors';
// import actions from '../../modules/services/state/actions';

import StateContext from '../../modules/services/state/context';



export interface ViewOwnProperties {
    appProperties: ManualAppProperties;
}

interface ViewStateProperties {
}

interface ViewDispatchProperties {
    dispatch: ThunkDispatch<{}, {}, AnyAction>;
}

type ViewProperties = ViewOwnProperties
    & ViewStateProperties
    & ViewDispatchProperties;

const View: React.FC<ViewProperties> = (
    properties,
) => {
    /** properties */
    // const {
    //     /** own */
    //     appProperties,

    //     /** state */

    //     /** dispatch */
    //     // dispatch,
    // } = properties;

    // const {
    //     modules,
    //     metadata,
    // } = appProperties;


    /** references */
    const viewElement = useRef<HTMLDivElement>(null);


    /** state */


    /** callbacks */


    /** render */
    // const viewContainer = handleView();

    return (
        <StyledView
            ref={viewElement}
            tabIndex={0}
        >
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
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(View);
