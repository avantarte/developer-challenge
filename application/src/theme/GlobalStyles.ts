import { createGlobalStyle } from 'styled-components';
import {theme} from "./Theme"

export const GlobalStyle = createGlobalStyle`  
html{
    font-size: 12px;
}

@font-face {
	font-family: 'MaisonNeue-Mono';
	src: url('../fonts/MaisonNeue-Mono/MaisonNeue-Mono.eot') format('embedded-opentype'),  
		url('../fonts/MaisonNeue-Mono/MaisonNeue-Mono.woff') format('woff'), 
		url('../fonts/MaisonNeue-Mono/MaisonNeue-Mono.ttf')  format('truetype'), 
		url('../fonts/MaisonNeue-Mono/MaisonNeue-Mono.svg') format('svg');
	font-weight: normal;
	font-style: normal;
  }

  
body{
    -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 400;
	font-size: 1em;
	margin: 0;
	text-rendering: optimizeLegibility;
    font-family:${theme.fontStandard};
}
`;