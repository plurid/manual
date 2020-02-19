import {
    ManualMetadata,
} from '@plurid/manual-data';



export const DATA_SET_METADATA = 'DATA_SET_METADATA';
export interface DataSetMetadataAction {
    type: typeof DATA_SET_METADATA;
    payload: ManualMetadata;
}



export interface State {
    metadata: ManualMetadata;
}


export type Actions = DataSetMetadataAction;
