// Index:
// 0. Includes
// 1. Colors
// 2. Mixins
//  2.1 Grid & structure
//  2.2 Helpers
//  2.3 Common Elements

// a single export point for vars, and for local usage too:
import {css} from "styled-components"
import {default as media} from "./_media"
export {default as media} from "./_media"
// end export point

//// 1. Colors
export const colors = {
	almostWhite: "#eeefee",
	almostBlack: "#111",
	darkGray: "#181E27",
	midGray: "#909399",
	lightGray: "#C5C8D0",
	lightestGray: "#EEEFEE",
	mint: "#ABEAF4",
	peach: "#FFDECC",
	transparentWhite: "rgba(255, 255, 255, .1)",
	transparentBlack: "rgba(0, 0, 0, .5)",
}

//// 2. Mixins
//// 2.1 Grid & structure
export const sizes = {
	headerHeight: "100px",
}

export const mixins = {

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
	borderRadius: css`
		border-radius: 5px;
	`,
	blackGradient: css`
		background: linear-gradient(180deg, #181E27 0%, rgba(14, 17, 22, 0.7) 50%, #111111 100%);
	`,
	hoverOpacity: css`
		transition: opacity .2s ease-in;
		&:hover {opacity: .85}
	`,
	hoverTransition: css`
		transition: all .2s ease-in;
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
		border-radius: 5px;
		border: none;
		outline: none;
	`,
	button: css`
		padding: 6px 25px;
		font-size: 18px;
		font-weight: 300;
		text-align: center;
		border-radius: 5px;
		border: none;
		outline: none;
		transition: opacity .15s ease-in;
		&:hover {opacity: .85}
	`,

}//mixins
