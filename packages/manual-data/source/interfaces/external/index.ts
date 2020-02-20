import {
    JSONOutput,
} from 'typedoc';

import React from 'react';



export interface ManualData extends JSONOutput.ProjectReflection {
}


export interface ManualAppProperties {
    modules: ManualModule[];
    metadata: ManualMetadata;
    data?: ManualData[];
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
