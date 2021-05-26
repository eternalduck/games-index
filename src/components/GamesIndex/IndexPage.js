import React, {useState, useEffect} from "react"
import {useGlobalState} from "../../service/globalState"
import {requestURLs, apiCall} from "../../service/apiCalls"
import styled from "styled-components"
import {mixins, media} from "../../style/vars-mixins/_index"
import {text} from "../../data/text"
import Layout from "../Layout/Layout"
import GameItem from "./GameItem"
import Controls from "../Controls/Controls"
import Nav from "../Controls/Nav"
import Loading from "../Loading/Loading"
import Page404 from "../Page404/Page404"

const IndexPage = () => {
	const [gamesData, setGamesData] = useGlobalState("gamesData")
	const [isLoading, setIsLoading] = useGlobalState("isLoading")
	const [prevPage, setPrevPage] = useGlobalState("prevPage")
	const [nextPage, setNextPage] = useGlobalState("nextPage")
	const [gamesList, setGamesList] = useState(null)

	// TODO it's better to use localStorage to save fetch results
	// Main content fetching
	const getGamesData = () => {
		apiCall(setGamesData, setIsLoading, requestURLs.URLgamesList)
	}
	useEffect(() => {
		getGamesData()
	}, [])

	useEffect(() => {
		// Populate games list []
		const processGamesList = () => {
			if (gamesData) {
				const games = gamesData.results
				setGamesList(games)
				setPrevPage(gamesData.previous)
				setNextPage(gamesData.next)
			}
		}
		processGamesList()
	}, [gamesData, isLoading])

	return (
		<Layout>
			<Controls fetchOnSearchCleared={getGamesData}/>
			{gamesData && gamesData.count === 0
				? <MiniBsod>
						<Page404 reason={text.noResults}/>
					</MiniBsod>
				: <>
					<Nav/>
					<ListWrap>
						{!isLoading && gamesList
							? gamesList && gamesList.map(game =>
								<ItemWrap key={game.id}>
									<GameItem game={game}/>
								</ItemWrap>
							)
							: <Loading/>
						}
					</ListWrap>
					<Nav onClick={window.scrollTo(0, 0)}/>
				</>}
		</Layout>
	)
}
export default IndexPage

const ListWrap = styled.div`
	min-height: 50vh;
	${media.md`
		${mixins.flexRowWrap}
	`}
`
const ItemWrap = styled.div`
	margin-bottom: 50px;
	flex: 0 1 45%;
	${media.lg`
		flex: 0 1 30%;
	`}
`
const MiniBsod = styled.div`
	height: 500px;
	margin-top: 50px;
`
