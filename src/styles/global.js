import { createGlobalStyle } from 'styled-components';
import SFProDisplayLight from '../fonts/SFProDisplay-Light.woff2';
import SFProDisplayMedium from '../fonts/SFProDisplay-Medium.woff2';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'SFProDisplay-Light';
        src: url('${SFProDisplayLight}') format('woff2')
    }
    @font-face {
        font-family: 'SFProDisplay-Medium';
        src: url('${SFProDisplayMedium}') format('woff2')
    }

    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.primaryText};
        font-family: SFProDisplay-Light;
        transition: all 0.25s linear;
    }

    h1, h3, h4, p, input, strike {
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

    p, strike, input {
        font-size: 19px;
    }
    
    body::-webkit-scrollbar {
        width: 0.8em;
    }
    
    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius: 10px;
    }
`;

export default GlobalStyles;
