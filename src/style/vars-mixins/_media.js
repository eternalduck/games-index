import { css } from "styled-components"

const breakpoints = {
	sm: "min-width: 576px",
	md: "min-width: 750px",
	lg: "min-width: 990px",
	xl: "min-width: 1200px",
}

export default Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media(${breakpoints[label]}) {
			${css(...args)}
	}`
	return accumulator
}, {})
