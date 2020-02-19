import React from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconMore,
} from '@plurid/plurid-icons-react';

import {
    StyledToolbarMetadata,
} from './styled';

import ToolbarMetadataBase from '../ToolbarMetadataBase';
import ToolbarButton from '../ToolbarButton';

import { AppState } from '../../services/state/store';
import StateContext from '../../services/state/context';
import selectors from '../../services/state/selectors';
// import actions from '../../services/state/actions';



interface ToolbarMetadataOwnProperties {
}

interface ToolbarMetadataStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

interface ToolbarMetadataDispatchProperties {
}

type ToolbarMetadataProperties = ToolbarMetadataOwnProperties
    & ToolbarMetadataStateProperties
    & ToolbarMetadataDispatchProperties;

const ToolbarMetadata: React.FC<ToolbarMetadataProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** state */
        // stateGeneralTheme,
        stateInteractionTheme,
    } = properties;


    /** render */
    return (
        <StyledToolbarMetadata>
            <ToolbarMetadataBase
                theme={stateInteractionTheme}
            >
                <div
                    style={{
                        margin: '0 15px',
                    }}
                >
                    name
                </div>

                <ToolbarButton
                    text=""
                    atClick={() => {}}
                    icon={PluridIconMore}
                    active={false}
                    style={{
                        width: '40px',
                    }}
                />
            </ToolbarMetadataBase>
        </StyledToolbarMetadata>
    );
}


const mapStateToProperties = (
    state: AppState,
): ToolbarMetadataStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ToolbarMetadataDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(ToolbarMetadata);
