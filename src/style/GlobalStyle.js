import React from "react"
import {createGlobalStyle} from "styled-components"
import {colors} from "./vars-mixins/_index"
import {resetCss} from "./utils/_reset"

const GlobalStyle = createGlobalStyle`
	${resetCss}
	// 1. General
	body {
		font-family: "Open Sans", sans-serif;
		background: ${colors.almostBlack};
		color: ${colors.almostWhite};
		font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
		font-weight: 300;
		line-height: 1.5;
	}
	.hover {
		cursor: pointer;
	}
	// 2. Typography
	h1, h2, h3 {
		font-weight: 700;
		line-height: 1.3;
	}
	h1 {
		margin-bottom: 20px;
		font-size: 2em;
	}
	h2 {
		margin-bottom: 15px;
		font-size: 1.6em;
	}
	h3 {
		margin-bottom: 15px;
		font-size: 1.4em;
	}
	p {
		font-size: 1em;
		margin: 0 0 8px;
	}
	b, strong {
		font-weight: 600;
	}
	i {
		font-style: italic;
	}
	a {
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}

`//createGlobalStyle

export default GlobalStyle
