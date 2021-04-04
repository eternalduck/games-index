import React, {useState, useEffect, useContext} from "react"
import styled from "styled-components"
import {colors, mixins} from "../../style/vars-mixins/_index"
import {ArrowUpward, ArrowDownward} from "@material-ui/icons"
import {text} from "../data/text"
import ControlContext from "./ControlContext"

const Sort = (props) => {
	// State to change buttons icons, empty on load
	const [ratingDesc, setRatingDesc] = useState(null)
	const [dateDesc, setDateDesc] = useState(null)
	const cprops = useContext(ControlContext)

	return (
		<>
			<ButtonWrap>
				<Toggle
					option={ratingDesc}
					onClick={() => {
						ratingDesc ? cprops.handlerRatingDesc() : cprops.handlerRatingAsc()
						setRatingDesc(dir => !dir)
					}}
				>
					{text.btnSortByRating}
				</Toggle>
				<Toggle
					option={dateDesc}
					onClick={() => {
						dateDesc ? cprops.handlerDateDesc() : cprops.handlerDateAsc()
						setDateDesc(dir => !dir)
					}}
				>
					{text.btnSortByDate}
				</Toggle>
			</ButtonWrap>
		</>
	)
}
export default Sort

const Toggle = (props, onClick) => {
	return(
		<Button sortDirection={props.option} onClick={props.onClick}>
			<span>{props.children}</span>
			{props.option !== null
					? props.option
							? <ArrowUpward/>
							: <ArrowDownward/>
					: null
			}
		</Button>
	)
}
const ButtonWrap = styled.div`
	${mixins.flexCentered};
`
const Button = styled.button`
	width: 130px;
	background-color: ${props => props.sortDirection ? colors.lightestGray : colors.lightGray};
	${mixins.button};
	${mixins.flexCentered};
	white-space: nowrap;
	cursor: pointer;
	&:first-child {
		margin-right: 15px;
	}
`
