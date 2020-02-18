import { combineReducers } from 'redux';

import * as configuration from '../modules/configuration';
import * as shortcuts from '../modules/shortcuts';
import * as space from '../modules/space';
import * as themes from '../modules/themes';
import * as ui from '../modules/ui';



const rootReducer = combineReducers({
    configuration: configuration.reducer,
    shortcuts: shortcuts.reducer,
    space: space.reducer,
    themes: themes.reducer,
    ui: ui.reducer,
});


export default rootReducer;
