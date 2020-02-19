import React, {
    useState,
} from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    PluridSubApp,
    PluridPage,
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

import testdata from '../../../../test/data/@plurid/plurid-react.json';


interface SpaceOwnProperties {
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
    // const {
        // /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
    // } = properties;

    // const [pluridPages, setPluridPages] = useState([]);

    const pluridPages = testdata.children.map(element => {
        const pluridPage: PluridPage = {
            path: '/' + element.id,
            component: {
                element: () => (
                    <ManualElement>
                        <div>
                            {element.kindString} - {element.name}
                        </div>
                    </ManualElement>
                ),
                properties: {},
            },
        };
        return pluridPage;
    });

    const view = testdata.children.map(element => {
        return '/' + element.id;
    });


    /** render */
    return (
        <StyledSpace>
            <PluridSubApp
                pages={pluridPages}
                view={view}
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
