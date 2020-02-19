import * as Types from './types';



export const setMetadata = (
    state: Types.State,
    action: Types.DataSetMetadataAction,
): Types.State => {
    return {
        ...state,
        metadata: {
            ...action.payload,
        },
    };
}
