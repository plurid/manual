import React from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    JSONOutput,
} from 'typedoc';

import {
    PluridSubApp,
    PluridPage,
    PluridConfiguration,
    RecursivePartial,
    SPACE_LAYOUT,
} from '@plurid/plurid-react';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledSpace,
} from './styled';

import ManualElement from '../../components/ManualElement';

import { AppState } from '../../services/state/store';
import StateContext from '../../services/state/context';
import selectors from '../../services/state/selectors';
// import actions from '../../services/state/actions';



interface SpaceOwnProperties {
    data?: JSONOutput.ProjectReflection[];
}

interface SpaceStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

interface SpaceDispatchProperties {
}

type SpaceProperties = SpaceOwnProperties
    & SpaceStateProperties
    & SpaceDispatchProperties;

const Space: React.FC<SpaceProperties> = (
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

    // const [pluridPages, setPluridPages] = useState([]);

    const pluridPages = data
        ? data[0]?.children?.map(element => {
            const pluridPage: PluridPage = {
                path: '/' + element.id,
                component: {
                    element: () => (
                        <ManualElement
                            data={element}
                        />
                    ),
                    properties: {},
                },
            };
            return pluridPage;
        })
        : [];

    const view = data
        ? data[0]?.children?.map(element => {
            return '/' + element.id;
        })
        : [];

    const pluridConfiguration: RecursivePartial<PluridConfiguration> = {
        elements: {
            plane: {
                width: 0.5,
                controls: {
                    show: false,
                },
            },
        },
        space: {
            layout: {
                type: SPACE_LAYOUT.ROWS,
                rows: 1,
            },
        },
    };


    /** render */
    return (
        <StyledSpace>
            <PluridSubApp
                pages={pluridPages}
                view={view}
                configuration={pluridConfiguration}
            />
        </StyledSpace>
    );
}


const mapStateToProperties = (
    state: AppState,
): SpaceStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): SpaceDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Space);
