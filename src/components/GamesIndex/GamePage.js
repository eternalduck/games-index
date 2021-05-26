import React, {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import {requestURLs, apiCall} from "../../service/apiCalls"
import styled from "styled-components"
import {colors, mixins, sizes} from "../../style/vars-mixins/_index"
import {ArrowBack} from "@material-ui/icons"
import Layout from "../Layout/Layout"
import Page404 from "../Page404/Page404"
import Loading from "../Loading/Loading"
import Slider from "../Slider/Slider"
import {text} from "../../data/text"

const GamePage = () => {
	let {slug} = useParams()
	let {noGame, labelRating, labelDate, labelWebsite} = text
	const [game, setGame] = useState(null)
	const [screens, setScreens] = useState(null)


	useEffect(() => {
		const getGame = async() => {
			try {
				await apiCall(setGame, undefined, requestURLs.URLgame(slug))
			} catch (e) {
				console.error("aaa! game fetch failed!")
			}
		}
		getGame()
	}, [])

	useEffect(() => {
		const getScreens = async() => {
			try {
				await apiCall(setScreens, undefined, requestURLs.URLscreens(slug))
			} catch (e) {
				console.error("aaa! screens fetch failed!")
			}
		}
		getScreens()
	}, [game])

	return (
		<Layout>
			{game && game.detail === "Not found..."
				? <BigBsod>
					<Page404 reason={noGame}/>
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
								<Details>
									<p>{labelRating} <b>{game.rating}</b></p>
									<p>{labelDate} <b>{game.released}</b></p>
									<Platforms>
										{game.parent_platforms.map(pl =>
												<span key={pl.platform.id}>{pl.platform.name}</span>
										)}
									</Platforms>
									<a href={game.website} target="_blank" rel="noreferrer">
										{labelWebsite}
									</a>
								</Details>
								<Description dangerouslySetInnerHTML={{__html: game.description}}/>
							</Info>
							{screens && screens.results.length !== 0 &&
							<Slider screens={screens.results}/>
							}
						</Gamepage>
				}</>
			}
		</Layout>
	)
}
export default GamePage

const Gamepage = styled.article`
	padding: 40px 0;
`
const BigBsod = styled.div`
	margin: 100px 0;
	height: 60vh;
`
const LinkSc = styled(Link)`
	color: ${colors.almostWhite};
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
const Title = styled.h1`
	text-align: center;
`
const Info = styled.div`
	position: relative;
	${mixins.centered};
	max-width: 800px;
	z-index: 10;
	${mixins.borderRadius};
`
const Details = styled.div`
	font-size: 22px;
	color: ${colors.peach};

	a {
		color: ${colors.lightGray};
	}
`
const Platforms = styled.p`
	font-style: italic;

	span {
		&:after {
			content: ", ";
		}

		&:last-child:after {
			content: "";
		}
	}
`
const Description = styled.div`
	margin: 30px 0;
`
