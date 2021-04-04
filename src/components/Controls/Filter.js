import React, {useState, useEffect, useContext} from "react"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import {text} from "../data/text"
import {requestURLs, apiCall} from "../service/apiCalls"
import ControlContext from "./ControlContext"


const Filter = () => {
	const cprops = useContext(ControlContext)
	const [platformsData, setPlatformsData] = useState({})
	const [platformsList, setPlatformsList] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const getPlatformsData = async() => {
			await apiCall(setPlatformsData, setIsLoading, requestURLs.URLplatforms)
		}
		getPlatformsData()
	}, [])

	useEffect(() => {
		if (platformsData) {
			const processPlatformsList = () => {
				const platforms = platformsData.results
				setPlatformsList(platforms)
				// console.info("processPlatformsList run")
			}
			processPlatformsList()
		}
	}, [platformsData])


	return (
		<>
			<Select>
				<option value={""}>{text.labelSelectPlatform}</option>
				{!isLoading &&
					platformsList && platformsList.map(pl =>
						<option key={pl.id}
							onClick={e => cprops.setPlatform(pl.id)}
							value={pl.id}
						>{pl.name}
						</option>
					)
				}
			</Select>
		</>
	)
}
export default Filter

const Select = styled.select`
	${mixins.input};
	cursor: pointer;
`
