import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import {ArrowUpward, ArrowDownward} from "@material-ui/icons"


const Sort = (props) => {
	const [ratingAsc, setRatingAsc] = useState(true)
	const [dateAsc, setDateAsc] = useState(false)
	//
	// useEffect(() => {
	// 	console.info(`ratingAsc: ${ratingAsc}, dateAsc: ${dateAsc}, `)
	// }, [ratingAsc, dateAsc])


	return (
			<>
				<p>Sort by:</p>
				<ButtonWrap>
					<Button option={ratingAsc} onClick={() => setRatingAsc(dir => !dir)}>
						Rating
					</Button>
					<Button option={dateAsc} onClick={() => setDateAsc(dir => !dir)}>
						Release Date
					</Button>
				</ButtonWrap>
			</>
	)
}
export default Sort

const Button = (props, onClick) => {
	return(
		<Toggle sortDirection={props.option} onClick={props.onClick}>
			<span>{props.children}</span>
			{props.option
				? <ArrowUpward/>
				: <ArrowDownward/>
			}
		</Toggle>
	)
}

// const SortSc = styled.div`
// 	outline: 1px dashed orange;
// 	padding: 30px 0;
// `
const ButtonWrap = styled.div`
	${mixins.flexRow};
`
const Toggle = styled.button`
	margin-right: 15px;
	background-color: ${props => props.sortDirection ? colors.lightestGray : colors.lightGray};
	${mixins.button};
	${mixins.flexCentered};
	white-space: nowrap;
	cursor: pointer;
`
