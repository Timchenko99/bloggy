import {createGlobalStyle} from "styled-components";
import Roboto from '../fonts/Roboto/Roboto-Regular.ttf';
import RobotoBold from '../fonts/Roboto/Roboto-Bold.ttf';

import RalewaySemiBold from '../fonts/Raleway/static/Raleway-SemiBold.ttf';
import RalewayBold from '../fonts/Raleway/static/Raleway-Bold.ttf';

//beautiful styles by https://codepen.io/meodai
//source: https://codepen.io/meodai/pen/rNedxBa

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto Regular'),
        url(${Roboto}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto Regular'),
        url(${RobotoBold}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: 'Raleway';
        src: local('Raleway'), 
        url(${RalewaySemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Raleway';
        src: local('Raleway'), 
        url(${RalewayBold}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }
    
    :root{
        --text-color: #333;
        --size-radius: 4px;
        --size-bezel: 0.5rem;
        --color-light: white;
        --color-dark: #212121;
        --color-signal: #fab700;
        --color-background: var(--color-light);
        --color-text: var(--color-dark);
        --color-accent: var(--color-signal);
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }  
    *{
        margin: 0;
        padding: 0;
        outline:0;
    }
    #root{
        margin:0 auto;
    }
    body{
        font-family: 'Roboto', sans-serif;
        line-height: 1.5;
        font-size: 1.25rem;
        color: var(--text-color);
        margin-inline: auto;
        min-height: 100vh;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
    }
    a{
        font: inherit;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    
`