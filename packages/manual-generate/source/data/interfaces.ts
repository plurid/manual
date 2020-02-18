export interface ManualGenerate {
    render: 'html' | 'react' | 'vue' | 'angular';
    packages: string[];
    target: string;
}
