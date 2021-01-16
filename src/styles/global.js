import { createGlobalStyle } from 'styled-components';

import SFProDisplayUltraLight from '../fonts/SFProDisplay-Ultralight.woff2';
import SFProDisplayLight from '../fonts/SFProDisplay-Light.woff2';
import SFProDisplayMedium from '../fonts/SFProDisplay-Medium.woff2';
import SFProDisplayRegular from '../fonts/SFProDisplay-Regular.woff2';
import SFProDisplayBold from '../fonts/SFProDisplay-Bold.woff2';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'SFProDisplay-UltraLight';
        src: url('${SFProDisplayUltraLight}') format('woff2')
    }
    @font-face {
        font-family: 'SFProDisplay-Light';
        src: url('${SFProDisplayLight}') format('woff2')
    }
    @font-face {
        font-family: 'SFProDisplay-Medium';
        src: url('${SFProDisplayMedium}') format('woff2')
    }
    @font-face {
        font-family: 'SFProDisplay-Regular';
        src: url('${SFProDisplayRegular}') format('woff2')
    }
    @font-face {
        font-family: 'SFProDisplay-Bold';
        src: url('${SFProDisplayBold}') format('woff2')
    }

    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.primaryText};
        font-family: SFProDisplay-Light;
        transition: all 0.25s linear;
    }

    h1, h3, h4, p, input {
        margin: 0px;
        padding: 0px;
        font-weight: normal;
    }

    h1 {
        font-family: SFProDisplay-Medium;
        font-size: 38px;
    }
    
    h3 {
        font-family: SFProDisplay-Medium;
        font-size: 24px;
    }
    
    h4 {
        font-family: SFProDisplay-Regular;
        font-size: 22px;
    }

    p {
        font-size: 19px;
    }
`;

export default GlobalStyles;
