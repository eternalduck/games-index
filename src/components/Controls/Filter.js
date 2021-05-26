import React, {useState, useEffect} from "react"
import {useGlobalState} from "../../service/globalState"
import {requestURLs, apiCall} from "../../service/apiCalls"
import styled from "styled-components"
import {mixins} from "../../style/vars-mixins/_index"
import {text} from "../../data/text"

const Filter = () => {
	const [gamesData, setGamesData] = useGlobalState("gamesData")
	const [isLoading, setIsLoading] = useGlobalState("isLoading")
	const [currentPage, setCurrentPage] = useGlobalState("currentPage")
	const [platformsData, setPlatformsData] = useState(null)
	const [platformId, setPlatformId] = useGlobalState("platformId")
	const searchTerm = useGlobalState("searchTerm")

	// Fetch a list of parent platforms
	useEffect(() => {
		const getPlatformsList = () => {
			apiCall(setPlatformsData, undefined, requestURLs.URLplatforms)
		}
		getPlatformsList()
	}, [])

	// Fetch games by selected platform
	useEffect(() => {
		const filterByPlatform = async() => {
			let url
			if (searchTerm !== "") {// filter search results
				url = `${requestURLs.URLgamesByPlatform}${platformId}&search=${searchTerm}`
			} else {
				url = `${requestURLs.URLgamesByPlatform}${platformId}`
			}
			platformId && await apiCall(setGamesData, setIsLoading, url)
			setCurrentPage(1)
		}
		filterByPlatform()
	}, [platformId])

	return (
		<Select onChange={e => setPlatformId(e.target.value)} value={platformId}>
			<option value={""} disabled>{text.labelSelectPlatform}</option>
			{platformsData && platformsData.results.map(pl =>
					<option key={pl.id}
						value={pl.id}
					>
						{pl.name}
					</option>
			)}
		</Select>
	)
}
export default Filter

const Select = styled.select`
	${mixins.input};
	appearance: auto;
	cursor: pointer;
`
