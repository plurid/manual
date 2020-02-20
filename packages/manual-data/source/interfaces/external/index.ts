export interface ManualAppProperties {
    modules: ManualModule[];
    metadata: ManualMetadata;
    data?: any[];
}


export interface ManualModule {
    elements?: ManualElement[];
}


export interface ManualElement {
    element: any;
    elements?: ManualElement[];
}


export interface ManualMetadata {
    name: string;
}
