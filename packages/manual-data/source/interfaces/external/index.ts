export interface ManualProperties {
    modules: ManualModule[];
    metadata: ManualMetadata;
}


export interface ManualModule {
    elements: ManualElement[];
}


export interface ManualElement {
    elements: ManualElement[];
}


export interface ManualMetadata {
    name: string;
}
