import React from "react"
import styled from "styled-components"
import {mixins} from "../../style/vars-mixins/_index"
import {Header, Footer} from "./HeaderFooter"

const Layout = (props) => {
	return (
		<Container>
			<Header/>
			<ContentWidth>
				{props.children}
			</ContentWidth>
			<Footer/>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`
const ContentWidth = styled.div`
	${mixins.contentWidth};
	flex: 1;
`

export default Layout
