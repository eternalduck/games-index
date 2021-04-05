import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
import {colors, mixins} from "../../style/vars-mixins/_index"
import {Accessibility} from "@material-ui/icons"
import {text} from "../data/text"

const GameItem = (props) => {
	// Cheat to retrieve a small game preview by background_image path
	const getPoster = (gameBg) => {
		if (gameBg) {
			const poster = gameBg.match(/media\/screenshots/)
				? gameBg.replace("media/screenshots", "media/resize/420/-/screenshots")
				: gameBg.replace("/media/games/", "/media/resize/420/-/games/")
			return poster
		}
	}

	return (
		<Item>
			<ImageLink to={`/game/${props.game.slug}`}>
				{props.game.background_image
					? <img src={getPoster(props.game.background_image)} alt={props.game.name}/>
					: <NoImg><Accessibility/><br/>no preview</NoImg>
				}
			</ImageLink>
			<Txt>
				<Title>
					<Link to={`/game/${props.game.slug}`}>
						{props.game.name}
					</Link>
				</Title>
				<>
					<Rating>{text.labelRating} <span>{props.game.rating}</span></Rating>
					<Date>{text.labelDate} <span>{props.game.released}</span></Date>
					<Platforms>
						{props.game.parent_platforms.map(pl =>
							<span key={pl.platform.id}>{pl.platform.name}</span>
						)}
					</Platforms>
				</>
			</Txt>
		</Item>
	)
}
export default GameItem

const Item = styled.div`
	border: 1px solid ${colors.midGray};
	border-radius: 5px;
	padding: 15px;
	height: 100%;
	${mixins.hoverTransition};
	&:hover {
		border-color: ${colors.mint};
		
	}
`
const ImageLink = styled(Link)`
	${mixins.flexCentered};
	height: 200px;
	margin: 0 auto 20px;
	overflow: hidden;
	background-color: ${colors.transparentWhite};
	color: ${colors.midGray};
	border-radius: 5px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		${mixins.hoverOpacity};
	}
`
const NoImg = styled.span`
	text-align: center;
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
const Rating = styled.p`
	color: ${colors.peach};
	span {font-weight: bold;}
`
const Date = styled.p`
	span {font-weight: bold;}
`
const Platforms = styled.p`
	font-style: italic;
	color: ${colors.lightGray};
	margin-top: 20px;
	span {
		&:after {
			content: ", ";
		}
		&:last-child:after {
			content: "";
		}
	}
`

