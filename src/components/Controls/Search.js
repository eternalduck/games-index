import React, {useEffect} from "react"
import {useGlobalState} from "../service/globalState"
import {requestURLs, apiCall} from "../service/apiCalls"
import styled from "styled-components"
import {mixins} from "../../style/vars-mixins/_index"
import {text} from "../data/text"

const Search = (props) => {
	const [gamesData, setGamesData] = useGlobalState("gamesData")
	const [isLoading, setIsLoading] = useGlobalState("isLoading")
	const [searchTerm, setSearchTerm] = useGlobalState("searchTerm")
	const [currentPage, setCurrentPage] = useGlobalState("currentPage")

	// TODO: currently we can't sort search results by platform/rating/date.. but still can turn pages ;)
	useEffect(() => {
		const doSearch = async() => {
			if (searchTerm !== "") {
				const url = `${requestURLs.URLsearch}${searchTerm}`
				searchTerm && await apiCall(setGamesData, setIsLoading, url)//setIsLoading fails
				setCurrentPage(1)
			} else {//if search field is cleared - show initial games again
				await apiCall(setGamesData, setIsLoading, requestURLs.URLgamesList)
			}
		}
		doSearch()
	}, [searchTerm])

	return (
		<SearchInput type="text"
			onChange={e => setSearchTerm(e.target.value)}
			value={searchTerm}
			placeholder={text.labelSearch}
		/>
	)
}
export default Search

const SearchInput = styled.input`
	${mixins.input}
`
