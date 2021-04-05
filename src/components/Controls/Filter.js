import React, {useState, useEffect, useMemo} from "react"
import {useGlobalState} from "../service/globalState"
import {requestURLs, apiCall} from "../service/apiCalls"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import {text} from "../data/text"

const Filter = () => {
	const [gamesData, setGamesData] = useGlobalState("gamesData")
	const [isLoading, setIsLoading] = useGlobalState("isLoading")
	const [currentPage, setCurrentPage] = useGlobalState("currentPage")
	const [platformId, setPlatformId] = useState(null)
	const [platformsData, setPlatformsData] = useState(null)
	const [searchTerm, setSearchTerm] = useGlobalState("searchTerm")

	// Fetch a list of parent platforms
	useEffect(() => {
		const getPlatformsList = async() => {
			await apiCall(setPlatformsData, undefined, requestURLs.URLplatforms)
		}
		getPlatformsList()
	}, [])

	// Fetch by selected platform
	useEffect(() => {
		const filterByPlatform = async() => {
			let url
			if (searchTerm !== "") {// filter searched results
				url = `${requestURLs.URLgamesByPlatform}${platformId}&search=${searchTerm}`
			} else {
				url = `${requestURLs.URLgamesByPlatform}${platformId}`
			}
			platformId && await apiCall(setGamesData, setIsLoading, url)//setIsLoading fails
			setCurrentPage(1)
			console.info(searchTerm)
		}
		filterByPlatform()
	}, [platformId])

	return (
		<Select onChange={e => setPlatformId(e.target.value)} value={""}>
			<option value={""}>{text.labelSelectPlatform}</option>
			{platformsData && platformsData.results.map(pl =>
				<option key={pl.id} value={pl.id}>
					{pl.name}
				</option>
			)}
		</Select>
	)
}
export default Filter

const Select = styled.select`
	${mixins.input};
	cursor: pointer;
`
