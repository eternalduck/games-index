import React, {useState} from "react"
import {useGlobalState} from "../../service/globalState"
import {requestURLs, apiCall} from "../../service/apiCalls"
import {ArrowUpward, ArrowDownward} from "@material-ui/icons"
import styled from "styled-components"
import {colors, mixins} from "../../style/vars-mixins/_index"
import {text} from "../../data/text"

const Sort = () => {
	const [ratingDesc, setRatingDesc] = useState(null)
	const [dateDesc, setDateDesc] = useState(null)
	const [gamesData, setGamesData] = useGlobalState("gamesData")
	const [isLoading, setIsLoading] = useGlobalState("isLoading")
	const [currentPage, setCurrentPage] = useGlobalState("currentPage")
	const searchTerm = useGlobalState("searchTerm")

	const doSorting = async(url) => {
		// sort search results, platform should be taken into account too but I failed)
		if (searchTerm !== "") {
			url = `${url}&search=${searchTerm}`
		}
		await apiCall(setGamesData, setIsLoading, url)
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

const Toggle = (props) => {
	const {option, onClick, children} = props

	return(
		<Button sortDirection={option} onClick={onClick}>
			<span>{children}</span>
			{option !== null
				? option
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
