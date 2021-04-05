import React from "react"
import styled from "styled-components"
import {media, mixins} from "../../style/vars-mixins/_index"
import {ArrowBack, ArrowForward, Autorenew} from "@material-ui/icons"

const Nav = (props) => {
	return (
		<Navbar>
			{props.goPrev &&
				<ArrowBack
					onClick={props.goPrev}
					className={"hover"}
				/>
			}
			<Page>
				{props.loading
					? <Autorenew fontSize={"small"}/>
					: <span>{props.currentPage}</span>
				}
			</Page>
			{props.goNext &&
				<ArrowForward
					onClick={props.goNext}
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
		${mixins.flexCentered};
	`}
`
const Page = styled.p`
	width: 200px;
	text-align: center;
	font-size: 18px;
	line-height: 1;
	font-weight: bold;
	margin-bottom: 0;
`
