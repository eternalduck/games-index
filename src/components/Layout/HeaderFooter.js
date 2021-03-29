import React from "react"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import ContentWidth from "../Layout/ContentWidth"
import {SportsHandball} from "@material-ui/icons"


export const Header = (props) => {
	return (
			<HeaderSc>
				<ContentWidth>
					<h2>
						<SportsHandballSc fontSize="large"/>
						The Largest Games Index
					</h2>
				</ContentWidth>
			</HeaderSc>
	)
}

export const Footer = (props) => {
	return (
			<FooterSc>
				<ContentWidth>
					<p>task by @eternalduck, March 2021</p>
				</ContentWidth>
			</FooterSc>
	)
}

const SportsHandballSc = styled(SportsHandball)`
	margin-right: 10px;
`
const HeaderSc = styled.header`
	padding: 30px 0;
	${mixins.colorGradient};
	color: ${colors.almostWhite};
`
const FooterSc = styled.footer`
	margin-top: 80px;
	padding: 15px 0;
	background-color: ${colors.almostBlack};
	color: ${colors.midGray};
	font-size: 14px;
`
