import {
    ManualMetadata,
} from '@plurid/manual-data';

import * as Types from './types';



export const setMetadata = (
    payload: ManualMetadata,
): Types.DataSetMetadataAction => {
    return {
        type: Types.DATA_SET_METADATA,
        payload,
    };
}
