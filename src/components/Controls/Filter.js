import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import {config} from "../data/config"
import {text} from "../data/text"
import pl from "../TMP/platforms"//TMP

const Filter = () => {
	const platforms = pl//TMP
// GET https://api.rawg.io/api/platforms?key=API_KEY
	// https://api.rawg.io/api/platforms/lists/parents?key=API_KEY

	//https://api.rawg.io/api/games?dates=2019-09-01,2019-09-30&platforms=18,1,7

	//ORDERING============
// Available fields: name, released, added, created, updated, rating, metacritic. You can reverse the sort order adding a hyphen, for example: -released.
// https://rawg.io/?filters=%7B%22ordering%22:%5B%22-released%22%5D%7D


		useEffect(() => {
			// console.info(`count: ${count}`)
	}, [])



	return (
			<>
				<p>{text.labelSelectPlatform}</p>
				<Select>
					{
						platforms && platforms.results.map(pl =>
							<Option key={pl.id}>{pl.name}</Option>
								// add deep nesting for subcat, reduce?
						)
					}
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
