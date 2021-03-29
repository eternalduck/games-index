import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"

const Filter = (props) => {
// GET https://api.rawg.io/api/platforms?key=API_KEY
	// https://api.rawg.io/api/platforms/lists/parents?key=API_KEY

	//https://api.rawg.io/api/games?dates=2019-09-01,2019-09-30&platforms=18,1,7
	const platforms =
			{"count":14,
	"next":null,
	"previous":null,
	"results": [
		{
			"id":1,
			"name":"PC",
			"platforms": [
				{
					"id":4,
					"name":"PC"
				}
			]
		},
		{
			"id":2,
			"name":"PlayStation",
			"platforms": [
				{
					"id":187,
					"name":"PlayStation 5"
				},
				{
					"id":27,
					"name":"PlayStation"
				}
			]
		},
		{
			"id":3,
			"name":"Xbox",
			"platforms": [
				{
					"id":1,
					"name":"Xbox One"
				},
				{
					"id":186,
					"name":"Xbox Series S/X"
				},
				{
					"id":14,
					"name":"Xbox 360"
				},
				{
					"id":80,
					"name":"Xbox"
				}
			]
		},
		{
			"id":4,
			"name":"iOS",
			"platforms": [
				{
					"id":3,
					"name":"iOS"
				}
			]
		},
		{
			"id":8,
			"name":"Android",
			"platforms": [
				{
					"id":21,
					"name":"Android"
				}
			]
		}
	]
}



		useEffect(() => {
			// console.info(`count: ${count}`)
	}, [])




	return (
			<>
				<p>Select platform:</p>
				<Select>
					{/*<OptionsWrap>*/}
					{
						platforms && platforms.results.map(pl =>
							<Option key={pl.id}>{pl.name}</Option>
								// add deep nesting for subcat, reduce?
						)
					}
					{/*</OptionsWrap>*/}
				</Select>
			</>
	)
}

const Select = styled.select`
	outline: 1px dashed orange;
	position: relative;
	${mixins.input};

	
`


const Option = styled.option`
	${mixins.inputPadding};
	background: ${colors.almostWhite};
	color: ${colors.almostBlack};
	//cursor: pointer;
`
const SubOption = styled.optgroup`
	${mixins.inputPadding};
	background: ${colors.almostWhite};
	color: ${colors.almostBlack};
`

export default Filter
