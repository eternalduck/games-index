import React from "react"
import styled, {keyframes} from "styled-components"
import {colors, mixins} from "../../style/vars-mixins/_index"
import CloudDownloadIcon from "@material-ui/icons/CloudDownload"

const Loading = (props) => {
	return (
			<LoadingWrap>
				<CloudDownloadIconSc/>
			</LoadingWrap>
	)
}
const scale = keyframes`
	0%, 100% {
		transform: scale(1);
		opacity: 1;
	}
	50% {
		transform: scale(1.2);
		opacity: .7;
	}
`
const LoadingWrap = styled.div`
	${mixins.flexCentered};
	position: relative;
	width: 100%;
	padding: 50px;
	z-index: 9999;
`
const CloudDownloadIconSc = styled(CloudDownloadIcon)`
	animation: ${scale} 1.2s linear infinite;
	font-size: 100px !important;
`

export default Loading
