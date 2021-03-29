import React from "react"
import {css, createGlobalStyle} from "styled-components"
import {media, colors, mixins} from "./vars-mixins/_index"
import {resetCss} from "./utils/_reset"

const GlobalStyle = createGlobalStyle`
	${resetCss}
//////////TMP DEBUG/////////////////////
	body:before {
		content: "XS";
		color: yellow;
		position: fixed;
		top: 5px;
		right: 5px;
		font-size: 14px;
		z-index: 999999;
		${media.sm`
			content:"SM (min-width: 576)";
			color: red;
		`}
		${media.md`
			content:"MD (min-width: 750)";
			color: cyan;
		`}
		${media.lg`
			content:"LG (min-width: 990)";
			color: orange;
		`}
		${media.xl`
			content:"XL (min-width: 1200)";
			color: lime;
		`}
	}
//////////END TMP/////////////////////
	
	// 1. General
	body {
		font-family: "Open Sans", sans-serif;
		background: ${colors.darkGray};
		color: ${colors.almostWhite};
		//font-size: 16px;
		font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
		font-weight: 300;
		line-height: 1.5;
	}
	// 2. Typography
	h1, h2, h3, h4 {
		font-family: "Roboto Slab", serif;
		font-weight: 700;
		line-height: 1.3;
	}
	h1 {
		margin-bottom: 20px;
		font-size: 2em;
		//font-size: 28px;
		// ${media.md`
		// 	font-size: 30px;
		// `}
		// ${media.lg`
		// 	font-size: 40px;
		// `}
	}
	h2 {
		margin-bottom: 15px;
		font-size: 1.6em;
		// font-size: 24px;
		// ${media.md`
		// 	font-size: 26px;
		// `}
		// ${media.lg`
		// 	font-size: 36px;
		// 	margin-bottom: 20px;
		// `}
	}
	h3 {
		margin-bottom: 15px;
		font-size: 1.4em;
		//font-size: 22px;
		// ${media.md`
		// 	font-size: 26px;
		// `}
		// ${media.lg`
		// 	font-size: 30px;
		// 	margin-bottom: 20px;
		// `}
	}
	p {
		font-size: 1em;
		margin: 0 0 8px;
	}
	b, strong {
		font-weight: 600;
	}
	//a {
	//	text-decoration: none;
	//}
	// end typo

	//Icons
	// .icon {//fail
	// 	// width: ${props => props.big ? "52px" : "32px"};
	// 	// height: ${props => props.big ? "52px" : "32px"};
	// 	width: 32px;
	// 	height: 32px;
	// }
	.icon {
		width: 32px;
		height: 32px;
		&_big {
			width: 42px;
			height: 42px;
		}
	}
`//createGlobalStyle

export default GlobalStyle
