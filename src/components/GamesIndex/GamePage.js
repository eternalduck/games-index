import React, {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import styled from "styled-components"
import {colors, media, mixins, sizes} from "../../style/vars-mixins/_index"
import {text} from "../data/text"
import {config} from "../data/config"
import {apiCall} from "../service/apiCalls"
import Layout from "../Layout/Layout"
import Page404 from "../service/Page404"
import Loading from "../service/Loading"
import Slider from "./Slider"
import {ArrowBack} from "@material-ui/icons"

const GamePage = (props) => {
	const API_KEY = config.apiKey
	let {slug} = useParams()

	const [game, setGame] = useState(null)
	const [screens, setScreens] = useState(null)
	const urlGame = `https://api.rawg.io/api/games/${slug}?key=${API_KEY}`
	const urlScreens = `https://api.rawg.io/api/games/${slug}/screenshots?key=${API_KEY}`

	useEffect(() => {
		const getGame = async() => {
			try {
			await apiCall(setGame, undefined, urlGame)
			} catch(e) {
				console.error("aaa game fetch failed!")
			}
		}
		getGame()
	}, [])

	useEffect(() => {
		const getScreens = async() => {
			try {
			await apiCall(setScreens, undefined, urlScreens)
			} catch(e) {
				console.error("aaa screens fetch failed!")
			}
		}
		getScreens()
	}, [game])

	return (
		<>
			<Layout>
			{game && game.detail === "Not found."
				? <BigBsod>
						<Page404 reason={text.noGame}/>
					</BigBsod>
				: <>{!game
					? <Loading/>
					: <Gamepage>
							{game.background_image &&
								<Cover bg={game.background_image}/>
							}
							<Info>
								<LinkSc to={"/"}><ArrowBack/></LinkSc>
								<Title>{game.name}</Title>
									<Url href={game.website} target="_blank">
										{text.labelWebsite}
									</Url>
									<p>{text.labelRating} {game.rating}</p>
									<p><b>{text.labelDate} {game.released}</b></p>
									<p><i>{game.parent_platforms.map(pl =>
										<span key={pl.platform.id}>{pl.platform.name}, </span>
									)}</i></p>
									<Description dangerouslySetInnerHTML={{__html: game.description}}/>
							</Info>
							{screens &&
								<Slider screens={screens.results}/>
							}
						</Gamepage>
				}</>
			}
			</Layout>
		</>
	)
}

export default GamePage

const BigBsod = styled.div`
	margin: 100px 0;
	height: 60vh;
`
const Title = styled.h1`
	text-align: center;
`
const LinkSc = styled(Link)`
	color: ${colors.almostWhite};
`
const Gamepage = styled.article`
	padding: 40px 0;
`
const Cover = styled.div`
	display: block;
	background: url(${props => props.bg}) center top/cover no-repeat;
	position: absolute;
	width: 100%;
	height: 55vh;
	top: ${sizes.headerHeight};
	left: 0;
	z-index: 1;
	&:before {
		${mixins.defaultPseudo()};
		${mixins.blackGradient};
		z-index: 1;
	}
`
const Info = styled.div`
	position: relative;
	${mixins.centered};
	max-width: 600px;
	z-index: 10;
`
const Url = styled.a`
	display: block;
	margin-bottom: 30px;
	color: ${colors.mint};
	text-align: center;
`
const Description = styled.div`
	margin: 30px 0;
`
