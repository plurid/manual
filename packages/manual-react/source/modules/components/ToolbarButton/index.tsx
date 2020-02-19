import React from 'react';

import themes, {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledHorizontalToolbarButton,
    StyledHorizontalToolbarButtonIcon,
} from './styled';



interface HorizontalToolbarButtonOwnProperties {
    text: string;
    atClick: (event: React.MouseEvent) => void;
    active?: boolean;
    icon?: React.FC;
    scaleIcon?: boolean;
    theme?: Theme;
    style?: React.CSSProperties;
    className?: string;
}

const HorizontalToolbarButton: React.FC<HorizontalToolbarButtonOwnProperties> = (
    properties,
) => {
    /** properties */
    const {
        text,
        active,
        scaleIcon,
        atClick,
        icon: Icon,

        theme: themeProperty,
        style,
        className,
    } = properties;

    const theme = themeProperty || themes.plurid;


    /** render */
    return (
        <StyledHorizontalToolbarButton
            active={active}
            scaleIcon={scaleIcon}
            onClick={atClick}
            theme={theme}
            style={{
                ...style
            }}
            className={className}
        >
            {Icon && (
                <StyledHorizontalToolbarButtonIcon
                    text={text}
                >
                    <Icon />
                </StyledHorizontalToolbarButtonIcon>
            )}

            {text}
        </StyledHorizontalToolbarButton>
    );
}


export default HorizontalToolbarButton;
