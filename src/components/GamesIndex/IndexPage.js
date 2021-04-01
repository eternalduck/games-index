import React, {useState, useEffect, useRef, useCallback} from "react"
import styled, {css, createGlobalStyle } from "styled-components"
import {colors, mixins, media} from "../../style/vars-mixins/_index"
import {config} from "../data/config"
import {text} from "../data/text"
import {apiCall} from "../service/apiCalls"

import Controls from "../Controls/Controls"
import Nav from "../Controls/Nav"
import Layout from "../Layout/Layout"
import Loading from "../service/Loading"
import GameItem from "./GameItem"


const IndexPage = (props) => {

	const API_KEY = config.apiKey

	const mainGamesList = useRef()
	const [loading, setLoading] = useState(true)
	const [apiResponse, setApiResponse] = useState({})
	const [gamesList, setGamesList] = useState([])
	const [currentPage, setPage] = useState(1)//TODO get current
	const [prev, setPrev] = useState(null)
	const [next, setNext] = useState(null)
	const urlGamesList = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=6`//TODO 12

// GET https://api.rawg.io/api/games?key=API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7

	const getGamesData = async() => {
		try {
			await apiCall(urlGamesList, setApiResponse)
		} catch(e) {
			console.error("AAA FAIL!")
		}
		// setApiResponse(response)
	}


	const processGamesList = () => {
		setGamesList(apiResponse.results)//populate games list []
		// setGamesList(list => [...list, apiResponse.results])//TODO append state for inf scroll
		setPrev(apiResponse.previous)// get prev page
		setNext(apiResponse.next)// get next page
		setLoading(false)// done loading
	}


	useEffect(() => {
		getGamesData()

	// 	// detectEnd()//TODO inf scroll
	// 	// return () => window.removeEventListener("scroll", detectEnd)
	}, [])

	useEffect(() => {
		processGamesList()
		console.info("apiResponse: ")
		console.info(apiResponse)
	}, [apiResponse])// FAIL it's called in a wrong place

	useEffect(() => {
		console.info("gamesList: ")
		console.info(gamesList)
	}, [gamesList])

	//TODO: replace with infinite scroll based on detection of the lower edge of the games list & calling turnThePage(); we also need to clean first items if the page grows too long..
	const turnThePage = useCallback(async(url) => {
		url && await apiCall(url, setApiResponse)
		// setLoading(false)//fail?
		console.info(`turn called!`)
	}, [])


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



////////EXAMPLE////////////////////
// 	const [data, setData] = useState(null);
//   const [dataIsReady, setDataIsReady] = useState(false);
//   const getRawgApi = useCallback(async () => {
//     try {
//       const response = await fetch("/api/trending");
//       const json = await response.json();
//       setData(json);
//       setDataIsReady(true);
//     } catch (e) {
//       console.error(e);
//     }
//   }, []);
//   useEffect(() => {
//     getRawgApi();
//   }, [getRawgApi]);

/////EXAMPLES END//////

	return (
		<>
			<Layout>
				<Controls/>
				<Nav
					next={() => turnThePage(next)}
					prev={() => turnThePage(prev)}
					// currentPage={currentPage}//??
				/>

				<ListWrap ref={mainGamesList}>{/*TODO ref used for inf scroll*/}
					{/* TODO of search or filter - change gamesList to some filtered results obj*/}
					{gamesList && loading == false ? gamesList.map((game, i) =>
						<ItemWrap key={game.id}>
							<GameItem game={game}/>
						</ItemWrap>
					)
					: <Loading/>}
				</ListWrap>
				{/*<Nav*/}
				{/*	prev={() => turnThePage("prev", true)}*/}
				{/*	next={() => turnThePage("next", true)}*/}
				{/*/>*/}
			</Layout>
		</>
	)
}//IndexPage

const ListWrap = styled.div`
	padding: 50px 0;
	${media.md`
		${mixins.flexRowWrap}
		justify-content: space-around;
	`}
	${media.lg`
		justify-content: space-between;
	`}
`
const ItemWrap = styled.div`
	margin-bottom: 50px;
	flex: 0 1 40%;
	${media.lg`
		flex: 0 1 30%;
	`}
`

export default IndexPage
