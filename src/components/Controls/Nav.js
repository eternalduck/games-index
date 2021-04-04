import React from "react"
import styled from "styled-components"
import {media, mixins} from "../../style/vars-mixins/_index"
import {ArrowBack, ArrowForward, Autorenew} from "@material-ui/icons"
import {text} from "../data/text"

const Nav = (props) => {
	return (
		<Navbar>
			{props.prev &&
				<ArrowBack
					onClick={props.prev}
					fontSize="large"
					className={"hover"}
				/>
			}
			<Page>{props.loading
				? <Autorenew/>
				: <span>{props.currentPage}</span>
			}
			</Page>
			{props.next &&
				<ArrowForward
					onClick={props.next}
					fontSize="large"
					className={"hover"}
				/>
			}
		</Navbar>
	)
}
export default Nav

const Navbar = styled.nav`
	margin: 30px 0;
	${mixins.flexRow};
	${media.lg`
		justify-content: center;
	`}
`
const Page = styled.p`
	width: 120px;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	margin: 0 40px;
`
