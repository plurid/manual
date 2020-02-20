import {
    JSONOutput as ManualData,
} from 'typedoc';

import React from 'react';



export {
    ManualData,
}


export interface ManualAppProperties {
    modules: ManualModule[];
    metadata: ManualMetadata;
    data?: ManualData.ProjectReflection[];
}


export interface ManualModule {
    id: string;
    elements: ManualElement[];
    name?: string;
}


export interface ManualElement {
    id: string;
    component: React.FC;
    name?: string;
    elements?: ManualElement[];
}


export interface ManualMetadata {
    name: string;
}
