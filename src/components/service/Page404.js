import React from "react"
import {useHistory} from "react-router-dom"
import styled from "styled-components"

const Page404 = (props) => {
	const history = useHistory()
	const goBack = () => history.goBack

	return(
		<Error>
			<ErrorTxt>
				<h1>not found</h1><br/>
				<p>A fatal exception 0E has occured at 0x000000FF: 42954C6A<br/>the current page will be terminated.</p>
				<p>* Press <Back onClick={goBack()}><span>any link</span></Back> to go to another page.<br/>
				* Press CTRL+ALT+DELETE again to restart your computer.<br/>
				You will lose any unsaved information in all applications.</p>
				<p>Press <Back onClick={goBack()}><span>any link</span></Back> to continue.</p>
			</ErrorTxt>
		</Error>
	)
}

export default Page404

const Error = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	background: navy;
`
const ErrorTxt = styled.div`
	text-align: center;
	color: #fff;
	font: bold 17px/1.3 "Courier New", monospace;
	flex: 0 0 80%;
	max-width: 600px;
	margin: auto;
	h1 {
		display: inline-block;
		padding: 0 10px;
		margin-bottom: 15px;
		font-size: 19px;
		color: navy;
		background: #fff;
	}
	p {
		text-align: left;
		font-weight: normal;
		line-height: 1.5;
		margin: 0 0 15px;
		&:last-child {
			margin-top: 30px;
			text-align: center;
		}
	}
`

const Back = styled.span`
	color: #fff;
	cursor: pointer;
	text-decoration: underline;
	&:hover {
		text-decoration: none;
	}
`
