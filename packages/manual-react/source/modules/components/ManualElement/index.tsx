import React from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledManualElement,
} from './styled';

import { AppState } from '../../services/state/store';
import StateContext from '../../services/state/context';
import selectors from '../../services/state/selectors';
// import actions from '../../services/state/actions';



interface ManualElementOwnProperties {
}

interface ManualElementStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

interface ManualElementDispatchProperties {
}

type ManualElementProperties = ManualElementOwnProperties
    & ManualElementStateProperties
    & ManualElementDispatchProperties;

const ManualElement: React.FC<ManualElementProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        children,

        /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
    } = properties;


    /** render */
    return (
        <StyledManualElement>
            {children}
        </StyledManualElement>
    );
}


const mapStateToProperties = (
    state: AppState,
): ManualElementStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ManualElementDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(ManualElement);
