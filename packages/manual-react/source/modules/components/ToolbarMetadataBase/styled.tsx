import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



interface IStyledToolbarControls {
    position: 'top' | 'bottom';
    theme: Theme;
}

export const StyledToolbarControls = styled.div<IStyledToolbarControls>`
    top: ${
        ({ position, }: IStyledToolbarControls) => {
            if (position === 'top') {
                return '15px';
            }
            return 'initial';
        }
    };
    bottom: ${
        ({ position, }: IStyledToolbarControls) => {
            if (position === 'bottom') {
                return '15px';
            }
            return 'initial';
        }
    };

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99999;
`;


interface IStyledToolbarControlsButtons {
    theme: Theme;
}

export const StyledToolbarControlsButtons = styled.div<IStyledToolbarControlsButtons>`
    background-color: ${
        ({ theme, }: IStyledToolbarControlsButtons) => {
            return theme.backgroundColorSecondary;
        }
    };
    box-shadow: ${
        ({ theme, }: IStyledToolbarControlsButtons) => {
            return theme.boxShadowUmbra;
        }
    };

    display: flex;
    align-items: center;
    border-radius: 22.5px;
    min-height: 45px;
    height: 45px;
    padding: 0 22.5px;
    margin: 0 auto;
    font-size: 0.9rem;
    opacity: 1;
    height: 100%;
`;
