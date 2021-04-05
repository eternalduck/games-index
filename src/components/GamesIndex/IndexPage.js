import React, {useState, useEffect, useRef, useCallback, useMemo} from "react"
import {useGlobalState} from "../service/globalState"
import {requestURLs, apiCall} from "../service/apiCalls"
import styled from "styled-components"
import {mixins, media} from "../../style/vars-mixins/_index"
import {text} from "../data/text"
import Layout from "../Layout/Layout"
import GameItem from "./GameItem"
import Controls from "../Controls/Controls"
import Nav from "../Controls/Nav"
import Loading from "../service/Loading"
import Page404 from "../service/Page404"

const IndexPage = (props) => {
	const mainGamesList = useRef()// for inf scroll
	const [gamesData, setGamesData] = useGlobalState("gamesData")
	const [isLoading, setIsLoading] = useGlobalState("isLoading")
	const [prevPage, setPrevPage] = useGlobalState("prevPage")
	const [nextPage, setNextPage] = useGlobalState("nextPage")
	const [gamesList, setGamesList] = useState(null)

	// TODO don't load if was already loaded once & save page num when returning from game page
	useEffect(() => {
	// Main content fetching
		const getGamesData = async() => {
			await apiCall(setGamesData, setIsLoading, requestURLs.URLgamesList)
		}
		getGamesData()
	}, [])

	useEffect(() => {
		if (gamesData) {
			const processGamesList = () => {
				const games = gamesData.results
				setGamesList(games)//populate games list []
				// setGamesList(list => [...list, games])//TODO append state for inf scroll
				// setGamesList(list => list.concat(games))
				setPrevPage(gamesData.previous)// get prev page
				setNextPage(gamesData.next)// get next page
			}
			processGamesList()
		}
	}, [gamesData, isLoading])

	return (
		<Layout>
			<Controls/>
			{gamesData && gamesData.count === 0
				? <MiniBsod>
						<Page404 reason={text.noResults}/>
					</MiniBsod>
				: <>
					<Nav/>
					<ListWrap ref={mainGamesList}>{/*TODO ref used for inf scroll*/}
						{!isLoading && gamesList
							? gamesList && gamesList.map((game) =>
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
`
