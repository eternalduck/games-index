import React, {useState, useEffect, useCallback} from "react"
import styled, {css, createGlobalStyle } from "styled-components"
import {colors, mixins, media} from "../../style/vars-mixins/_index"
import {Header, Footer} from "../Layout/HeaderFooter"
import Controls from "../Controls/Controls"
import ContentWidth from "../Layout/ContentWidth"
import Loading from "../service/Loading"
import GameItem from "./GameItem"


const IndexPage = (props) => {
	//this must be hidden & gitignored in prod!
	const API_KEY = "534e04fc1ef74119a8089cf249e9d38b"
	const userAgent = { 'User-Agent': 'games-index' }
	const [gamesList, setGamesList] = useState(null)

	let game = {//tmp
		"id": 123,
		"slug": "thegame",
		"name": "The Game",
		"rating": 0,
		"released": "2011",
		}

// GET https://api.rawg.io/api/platforms?key=API_KEY
// GET https://api.rawg.io/api/games?key=API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
	//get next
// https://api.rawg.io/api/games?key=API_KEY&page=2&page_size=10

///////////
	const optionsTopRated = {
		method: 'GET',
		headers: userAgent,
		url: 'https://api.rawg.io/api/games?key=API_KEY',
		qs: {
			key: API_KEY,
			ordering: '-added',
			page_size: 10
		}
	}
const getTopRated = `https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=12`
	const apiCall = url => {
		fetch(url)
		.then(response => response.json())
		.then(data => setGamesList(data))
		.then(data => console.log(gamesList.results))
	}

///////////
	useEffect(() => {
		// console.info(JSON.stringify(game, null, '\t'))
		apiCall(getTopRated)
		// console.info(JSON.stringify(gamesList, null, '\t'))
	}, [])//

	return (
		<>
			<Header/>
			<Controls/>
			<ContentWidth>
				<ListWrap>
					{gamesList ? gamesList.results.map((game, i) =>
						<ItemWrap key={game.id}>
							<GameItem game={game}/>
						</ItemWrap>
					)
					: <Loading/>}{/*TODO <Loading/>*/}
				</ListWrap>
			</ContentWidth>
			<Footer/>
		</>
	)
}//IndexPage

const ListWrap = styled.div`
	outline: 1px solid pink;
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
	outline: 1px dashed pink;
	margin-bottom: 50px;
	flex: 0 0 40%;
	${media.lg`
		flex: 0 0 30%;
	`}
`

export default IndexPage
