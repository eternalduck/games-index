import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import {text} from "../data/text"

const Search = () => {
	const [search, setSearch] = useState("")

//EXAMPLE
// https://github.com/theDavidBarton/video-games-on-RAWG-react-app/blob/master/client/src/components/search.jsx

//https://api.rawg.io/api/games?search=303%20squadron
// https://rawg.io/search?query=grand

	return (
			<>
				<SearchField type="text"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
					placeholder={text.labelSearch}
				/>
			</>
	)
}
const SearchField = styled.input`
	${mixins.input};

`

export default Search
