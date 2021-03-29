import React, {useState, useEffect} from "react"
import {Link, useRouteMatch} from "react-router-dom"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"

const GameItem = (props) => {
	let {url} = useRouteMatch()
	return (
		<Item>
			<ImgWrap>
				{/*<Link to={`${url}/${props.game.slug}`}>*/}
				{/*	<Img src={props.game.background_image} alt={props.game.name}/>*/}
				{/*</Link>*/}
			</ImgWrap>
			<Txt>
				<Title>
					{/*<Link to={`${url}/${props.game.slug}`}>*/}
						{props.game.name}
					{/*</Link>*/}
				</Title>
				{/*<>*/}
				{/*	<p>{props.game.name}</p>*/}
				{/*	<p>{props.game.rating}</p>*/}
				{/*	<p>{props.game.released}</p>*/}
				{/*</>*/}
			</Txt>
		</Item>
	)
}

export default GameItem

const Item = styled.div`
	outline: 1px solid greenyellow;
	padding: 20px 15px 15px 25px;
`
const ImgWrap = styled.div`
	//outline: 1px dotted red;
	margin: 0 auto 20px;
	& a {
		${mixins.hoverOpacity};
	}
`
const Img = styled.img`
	object-fit: cover;
	object-position: center;
	width: 100%;
`
const Txt = styled.div`
	//outline: 1px dashed orange;
	& a {color: ${colors.green};
`
const Title = styled.h3`
	margin-bottom: 15px;
`

