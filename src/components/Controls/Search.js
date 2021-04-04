import React, {useContext} from "react"
import styled from "styled-components"
import {mixins} from "../../style/vars-mixins/_index"
import {text} from "../data/text"
import ControlContext from "./ControlContext"

const Search = (props) => {
	const cprops = useContext(ControlContext)

	return (
		<>
			<SearchInput type="text"
				onChange={e => cprops.setSearch(e.target.value)}
				value={cprops.search}
				placeholder={text.labelSearch}
			/>
		</>
	)
}
export default Search

const SearchInput = styled.input`
	${mixins.input}
`
