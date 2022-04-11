import {createGlobalStyle} from "styled-components";
import Roboto from '../fonts/Roboto/Roboto-Regular.ttf';
import RalewaySemiBold from '../fonts/Raleway/static/Raleway-SemiBold.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto Regular'),
        url(${Roboto}) format('ttf');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Raleway';
        src: local('Raleway'), 
        url(${RalewaySemiBold}) format('ttf');
        font-weight: 600;
        font-style: normal;
    }
    
    :root{
        --size-radius: 4px;
        --size-bezel: 0.5rem;
    }
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }
    #root{
        margin:0 auto;
    }

    
`