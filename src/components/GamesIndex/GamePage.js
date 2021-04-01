import React, { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import styled from "styled-components"
import {colors, mixins} from "../../style/vars-mixins/_index"
import {text} from "../data/text"
import {config} from "../data/config"
import {apiCalls} from "../service/apiCalls"
import Layout from "../Layout/Layout"
import Page404 from "../service/Page404"
import Loading from "../service/Loading"

const GamePage = (props) => {
	const {gameId} = useParams()
	// Get data for the current game
	// const currentGame = request to https://api.rawg.io/api/games/gameId
	// const [game, setGame] = useState(w => w = currentGame)

//
//https://api.rawg.io/api/games/{id}/screenshots

	useEffect(() => {

	}, [])



	return (
		// !props.game ? //TODO enable this
		// <Page404/> :
		<>
			<Layout>
				<Title>props.game.name</Title>
				{/*<Title>{props.game.name}</Title>*/}
				<p>splide slider</p>
				{/*<Info>*/}
				{/*	<p>{props.game.rating}</p>*/}
				{/*	<p><b>{props.game.released}</b></p>*/}
				{/*	<p><b>{props.game.description}</b></p>*/}
				{/*	<Url href={props.game.website} target="_blank">*/}
				{/*		Website*/}
				{/*	</Url>*/}
				{/*</Info>*/}
				{/*<Slider>*/}
				{/*	<pre>{*/}
				{/*		"count": 0,*/}
				{/*		"next": "http://example.com",*/}
				{/*		"previous": "http://example.com",*/}
				{/*		"results": [*/}
				{/*			{*/}
				{/*				"image": "@image.jpg",*/}
				{/*				"hidden": false*/}
				{/*			}*/}
				{/*		]*/}
				{/*	}</pre>*/}
				{/*</Slider>*/}
			</Layout>
		</>
	)
}
export default GamePage

const Title = styled.h1`
	text-align: center;
`
const Info = styled.div`
	outline: 1px dashed hotpink;
`
const Url = styled.a`
	color: mediumvioletred;
`
const Slider = styled.div`
	outline: 2px dashed cyan;
`
