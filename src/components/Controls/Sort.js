import React, {useState} from "react"
import {useGlobalState} from "../service/globalState"
import {requestURLs, apiCall} from "../service/apiCalls"
import {ArrowUpward, ArrowDownward} from "@material-ui/icons"
import styled from "styled-components"
import {colors, mixins} from "../../style/vars-mixins/_index"
import {text} from "../data/text"

const Sort = (props) => {
	const [ratingDesc, setRatingDesc] = useState(null)
	const [dateDesc, setDateDesc] = useState(null)
	const [gamesData, setGamesData] = useGlobalState("gamesData")
	const [isLoading, setIsLoading] = useGlobalState("isLoading")
	const [currentPage, setCurrentPage] = useGlobalState("currentPage")

	// TODO: We fetch api again and reset all content, lose page number, etc.. should we instead sort what's already loaded ?..
	const doSorting = async(url) => {
		await apiCall(setGamesData, setIsLoading, url)//setIsLoading fails
		setCurrentPage(1)
	}

	return (
		<ButtonWrap>
			<Toggle
				option={ratingDesc}
				onClick={() => {
					ratingDesc
						? doSorting(requestURLs.URLratingDesc)
						: doSorting(requestURLs.URLratingAsc)
					setRatingDesc(dir => !dir)
				}}
			>
				{text.btnSortByRating}
			</Toggle>
			<Toggle
				option={dateDesc}
				onClick={() => {
					dateDesc
						? doSorting(requestURLs.URLreleasedDesc)
						: doSorting(requestURLs.URLreleasedAsc)
					setDateDesc(dir => !dir)
				}}
			>
				{text.btnSortByDate}
			</Toggle>
		</ButtonWrap>
	)
}
export default Sort

const Toggle = (props, onClick) => {
	return(
		<Button sortDirection={props.option} onClick={props.onClick}>
			<span>{props.children}</span>
			{props.option !== null
				? props.option
						? <ArrowUpward/>
						: <ArrowDownward/>
				: null
			}
		</Button>
	)
}
const ButtonWrap = styled.div`
	${mixins.flexCentered};
`
const Button = styled.button`
	width: 130px;
	background-color: ${props => props.sortDirection ? colors.lightestGray : colors.lightGray};
	${mixins.button};
	${mixins.flexCentered};
	white-space: nowrap;
	cursor: pointer;
	&:first-child {
		margin-right: 15px;
	}
`
