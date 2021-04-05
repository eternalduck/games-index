import React, {useState, useEffect, useRef, useCallback, useMemo} from "react"
import styled from "styled-components"
import {mixins, media} from "../../style/vars-mixins/_index"
import {requestURLs, apiCall} from "../service/apiCalls"
import {text} from "../data/text"
import Layout from "../Layout/Layout"
import GameItem from "./GameItem"
import Controls from "../Controls/Controls"
import Nav from "../Controls/Nav"
import Loading from "../service/Loading"
import Page404 from "../service/Page404"


const IndexPage = (props) => {
	const mainGamesList = useRef()
	const [isLoading, setIsLoading] = useState(true)
	const [isNavLoading, setIsNavLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [gamesData, setGamesData] = useState(null)
	const [gamesList, setGamesList] = useState(null)
	const [prev, setPrev] = useState(null)
	const [next, setNext] = useState(null)
	const [search, setSearch] = useState("")
	const [platformId, setPlatformId] = useState(null)

// TODO don't load if was already loaded once & save page num when returning from game page
	// Main content fetching
	const getGamesData = async() => {
		await apiCall(setGamesData, setIsLoading, requestURLs.URLgamesList)
	}
	useEffect(() => {
		getGamesData()

	// Catch the moment we have scrolled to the bottom of mainGamesList <ListWrap>
	// const detectEnd = () => {
	// 	let scrollTop
	// 	let winHeight = window.innerHeight
	// 	let listHeight
	// 	window.addEventListener("scroll", function () {
	// 		listHeight = mainGamesList.current.clientHeight
	// 		scrollTop = window.pageYOffset
	// 		if (scrollTop + 1000 > listHeight) {
	// 			mainGamesList.current.style.outline = "3px solid magenta"
	// 			turnThePage("next")
	// 		}
	//
	// 			////
	// 			console.info(
	// 		`
	// 				scrollTop: ${scrollTop}
	// 				winHeight: ${winHeight}
	// 				listHeight: ${listHeight}
	// 				`
	// 		)//DEBUG
	//
	// 	})//scroll
	// }
	// 	// detectEnd()//TODO inf scroll
	// 	// return () => window.removeEventListener("scroll", detectEnd)
	}, [])

	useEffect(() => {
		if (gamesData) {
			const processGamesList = () => {
				const games = gamesData.results
				setGamesList(games)//populate games list []
				// setGamesList(list => [...list, games])//TODO append state for inf scroll
				// setGamesList(list => list.concat(games))
				setPrev(gamesData.previous)// get prev page
				setNext(gamesData.next)// get next page
			}
			processGamesList()
		}
	}, [gamesData, isLoading])

	// TODO: replace with infinite scroll based on detection of the lower edge of the games list & calling turnThePage(); we also need to clean first items if the page grows too long..
	// Control: Paging
	const turnThePage = async(newPageUrl) => {
		if (newPageUrl) {
			setIsNavLoading(true)
			await apiCall(setGamesData, undefined, newPageUrl)
			// get current page
			const urlParams = new URLSearchParams(newPageUrl)
			const page = urlParams.get("page")
			page ? setCurrentPage(page) : setCurrentPage(1)//FAIL
			setIsNavLoading(false)
		}
	}

	// Control: Filter by platform with lifted props
	useEffect(() => {
		const filterByPlatform = async() => {
			const url = `${requestURLs.URLgamesByPlatform}${platformId}`
			platformId && await apiCall(setGamesData, setIsLoading, url)//setIsLoading fails
			setCurrentPage(1)
		}
		filterByPlatform()
	}, [platformId])

	// Control: Sorting TODO move all this to Sort.js but how to pass argument function?
	// We fetch api again and reset all content, lose page number, etc.. should we instead fetch what's already loaded ?..
	const doSorting = async(url) => {
		await apiCall(setGamesData, setIsLoading, url)//setIsLoading fails
		setCurrentPage(1)
	}

	// Control: Search with lifted props
	useEffect(() => {
		const doSearch = async() => {
			if (search !== "") {
				const url = `${requestURLs.URLsearch}${search}`
				search && await apiCall(setGamesData, setIsLoading, url)//setIsLoading fails
				setCurrentPage(1)
			} else {//if search field is cleared - show initial games again
				getGamesData()
			}
		}
		doSearch()
	}, [search])


	return (
		<>
			<Layout>
				<Controls
					handlerRatingDesc={() => doSorting(requestURLs.URLratingDesc)}
					handlerRatingAsc={() => doSorting(requestURLs.URLratingAsc)}
					handlerDateDesc={() => doSorting(requestURLs.URLreleasedDesc)}
					handlerDateAsc={() => doSorting(requestURLs.URLreleasedAsc)}
					setSearch={term => setSearch(term)}
					search={search}
					setPlatformId={pl => setPlatformId(pl)}
				/>
				{gamesData && gamesData.count === 0
					? <MiniBsod>
							<Page404 reason={text.noResults}/>
						</MiniBsod>
					: <>
						<Nav
							goNext={() => turnThePage(next)}//tmp
							goPrev={() => turnThePage(prev)}//tmp
							loading={isNavLoading}
							currentPage={currentPage}
						/>
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
						<Nav
							goNext={() => turnThePage(next)}
							goPrev={() => turnThePage(prev)}
							loading={isNavLoading}
							currentPage={currentPage}
							onClick={window.scrollTo(0, 0)}
						/>
					</>}
			</Layout>
		</>
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
