import { AppState } from '../store';



const getMetadata = (state: AppState) => state.data.metadata;


export default {
    getMetadata,
};
