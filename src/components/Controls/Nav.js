import React from "react"
import styled from "styled-components"
import {mixins} from "../../style/vars-mixins/_index"
import {ArrowBack, ArrowForward} from "@material-ui/icons"

const Nav = (props) => {

	return (
		<Navbar>
			<ArrowBack
				onClick={props.prev}
				fontSize="large"
				className={"hover"}
			/>
			{/*<p>{props.currentPage}</p>TODO*/}
			<ArrowForward
				onClick={props.next}
				fontSize="large"
				className={"hover"}
			/>
		</Navbar>
	)

}

const Navbar = styled.nav`
	outline: 1px dashed orange;
	margin: 30px 0;
	${mixins.flexRow};
`

export default Nav
