import React from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledToolbarControls,
    StyledToolbarControlsButtons,
} from './styled';



interface ToolbarControlsOwnProperties {
    position?: 'top' | 'bottom';

    theme?: Theme;
    style?: React.CSSProperties;
    className?: string;
}

type ToolbarControlsProperties = ToolbarControlsOwnProperties;

const ToolbarControls: React.FC<ToolbarControlsProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        /** required */

        /** optional */
        position: positionProperty,
        theme: themeProperty,
        style,
        className,

        children,
    } = properties;

    const position = positionProperty || 'top';
    const theme = themeProperty || themes.plurid;


    /** render */
    return (
        <StyledToolbarControls
            position={position}
            theme={theme}
            style={{
                ...style,
            }}
            className={className}
        >
            <StyledToolbarControlsButtons
                theme={theme}
            >
                {children}
            </StyledToolbarControlsButtons>
        </StyledToolbarControls>
    );
}


export default ToolbarControls;
