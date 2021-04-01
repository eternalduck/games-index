import React, {useState, useEffect} from "react"
import {Link, useRouteMatch} from "react-router-dom"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import {text} from "../data/text"

const GameItem = (props) => {
	let {url} = useRouteMatch()

	return (
		<Item>
			<ImageLink to={`/game/${props.game.slug}`}>
				{/* it's too big! but not all games have trailer preview.. */}
				{/*<img src={props.game.background_image} alt={props.game.name}/>*/}
			</ImageLink>
			<Txt>
				<Title>
					<Link to={`${url}/${props.game.slug}`}>
						{props.game.name}
					</Link>
				</Title>
				<>
					<p>{text.labelRating} <b>{props.game.rating}</b></p>
					<p>{text.labelDate} <b>{props.game.released}</b></p>{/*TODO make date nicer*/}
				</>
			</Txt>
		</Item>
	)
}

export default GameItem

const Item = styled.div`
	border: 1px solid ${colors.lightGray};
	border-radius: 5px;
	padding: 15px;
	height: 100%;
`

const ImageLink = styled(Link)`
	display: block;
	border-radius: 5px;
	background-color: ${colors.transparentWhite};
	height: 200px;
	margin: 0 auto 20px;
	overflow: hidden;
	img {
		max-width: 100%;
		object-fit: cover;
		object-position: center;
		${mixins.hoverOpacity};
	}
`
const Txt = styled.div`
	& a {
		color: ${colors.green}
	};
`
const Title = styled.h3`
	margin-bottom: 15px;
	a {
		color: #fff;
		&:hover {
			color: ${colors.mint};
			transition: color .15s ease-in;
		}
	}
`

