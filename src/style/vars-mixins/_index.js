// Index:
// 0. Includes
// 1. Colors
// 2. Mixins
// 2.1 Grid & structure
// 2.2 Helpers
// 2.3 Common Elements

// a single export point for vars, and for local usage too:
import {css} from "styled-components"
import {default as media} from "./_media"
export {default as media} from "./_media"

// end export point

// 1. Colors
export const colors = {
	almostWhite: "#eeefee",
	almostBlack: "#222",
	darkGray: "#1C1E22",
	midGray: "#909399",
	lightGray: "#C5C8D0",
	lightestGray: "#EEEFEE",
	mint: "#ABEAF4",
	peach: "#FFDECC",

}
export const mixins = {
// 2.1 Grid & structure

	contentWidth: css`
		width: 100%;
		padding: 0 15px;
		margin-right: auto;
		margin-left: auto;
		${media.sm`
			max-width: 500px;
			padding: 0;
		`}
		${media.md`max-width: 720px;`}
		${media.lg`max-width: 940px;`}
		${media.xl`max-width: 1100px;`}
	`,

//// 2.2 Helpers
	centered: css`
		margin-right: auto;
		margin-left: auto;
	`,
	flexCentered: css`
		display: flex;
		justify-content: center;
		align-items: center
	`,
	flexColumn: css`
		display: flex;
		flex-direction: column;
	`,
	flexRow: css`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`,
	flexRowWrap: css`
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	`,
	defaultPseudo: (width, height) => css`
		content: "";
		display: block;
		position: absolute;
		width: ${width || "100%"};
		height: ${height || "100%"};
		top: 0;
		left: 0;
	`,


//// 2.3 Common Elements
	boxShadow: (clr) => css`
		box-shadow: 0 0 14px -5px ${clr || "#000"};
	`,
	txtShadow: css`
		text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
	`,
	colorGradient: css`
		background: linear-gradient(261.37deg, rgba(7, 62, 72, 0.5) 22.68%, rgba(63, 16, 70, 0.5) 59.12%), linear-gradient(110.99deg, #012228 26.04%, #423F03 75.52%);
	`,
	hoverOpacity: css`
		transition: opacity .2s ease-in;
		&:hover {opacity: .85}
	`,
	inputPadding: css`
		padding: 3px 10px;
	`,
	input: css`
		padding: 3px 10px;
		width: 100%;
		height: 35px;
		font-size: 1em;
		background: ${colors.almostWhite};
		color: ${colors.almostBlack};
		border-radius: 3px;
		border: none;
		outline: none;
	`,
	button: css`
		padding: 5px 30px;
		font-size: 20px;
		font-weight: 300;
		text-align: center;
		border-radius: 3px;
		border: none;
		outline: none;
		transition: opacity .2s ease-in;
		&:hover {opacity: .9}
	`,

}//mixins
