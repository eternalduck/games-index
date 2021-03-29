import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"

const Search = (props) => {
	const [search, setSearch] = useState("")

//https://api.rawg.io/api/games?search=303%20squadron

	return (
			<>
				<SearchField type="text"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
					placeholder={"Search by game's name"}
				/>
			</>
	)
}
const SearchField = styled.input`
	outline: 1px dashed orange;
	${mixins.input};
	
`

export default Search
