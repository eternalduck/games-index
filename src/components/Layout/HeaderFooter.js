import React from "react"
import styled from "styled-components"
import {colors, mixins, sizes} from "../../style/vars-mixins/_index"
import {SportsHandball} from "@material-ui/icons"
import {text} from "../../data/text"

export const Header = () => {
	return (
		<HeaderSc>
			<ContentWidth>
				<h2>
					<SportsHandballSc fontSize={"large"}/>
					{text.siteTitle}
				</h2>
			</ContentWidth>
		</HeaderSc>
	)
}

export const Footer = () => {
	return (
		<FooterSc>
			<ContentWidth>
				<p>{text.copyright}</p>
			</ContentWidth>
		</FooterSc>
	)
}

const ContentWidth = styled.div`
	${mixins.contentWidth};
`
const SportsHandballSc = styled(SportsHandball)`
	margin-right: 10px;
`
const HeaderSc = styled.header`
	height: ${sizes.headerHeight};
	position: relative;
	padding: 25px 0;
	background-color: ${colors.darkGray};
	z-index: 50;
`
const FooterSc = styled.footer`
	margin-top: 80px;
	padding: 20px 0 15px;
	background-color: ${colors.darkGray};
	color: ${colors.midGray};
	font-size: 14px;
`
