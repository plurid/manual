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
    data: any;
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
        data,

        /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
    } = properties;


    /** render */
    return (
        <StyledManualElement>
            <div>
                {data.kindString} - {data.name} - {data.type?.name} - {data.comment?.text}
            </div>

            {data.children && data.children.map((child: any) => {
                return (
                    <div
                        key={child.id}
                        style={{
                            margin: '10px 30px',
                        }}
                    >
                        {child.kindString} - {child.name} - {child.type?.name} - {child.comment?.text}

                        {child.children && child.children.map((child: any) => {
                            return (
                                <div
                                    key={child.id}
                                >
                                    {child.kindString} - {child.name} - {child.type.name} - {child.comment?.text}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
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
