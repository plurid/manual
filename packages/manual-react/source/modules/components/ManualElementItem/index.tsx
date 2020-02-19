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
                {data.comment && (
                    <div>
                        {data.comment.shortText && (
                            <p>
                                {data.comment.shortText}
                            </p>
                        )}

                        {data.comment.text && (
                            <p>
                                {data.comment.text}
                            </p>
                        )}
                    </div>
                )}

                {data.kindString} - {data.name} - {data.type?.name}
            </div>

            {data.children && data.children.map((child: any) => {
                return (
                    <div
                        key={child.id}
                        style={{
                            margin: '10px 30px',
                        }}
                    >
                        {child.comment && (
                            <div>
                                {child.comment.shortText && (
                                    <p>
                                        {child.comment.shortText}
                                    </p>
                                )}

                                {child.comment.text && (
                                    <p>
                                        {child.comment.text}
                                    </p>
                                )}
                            </div>
                        )}

                        {child.kindString} - {child.name} - {child.type?.name}

                        {child.children && child.children.map((child: any) => {
                            return (
                                <div
                                    key={child.id}
                                >
                                    {child.comment && (
                                        <div>
                                            {child.comment.shortText && (
                                                <p>
                                                    {child.comment.shortText}
                                                </p>
                                            )}

                                            {child.comment.text && (
                                                <p>
                                                    {child.comment.text}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {child.kindString} - {child.name} - {child.type.name}
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
