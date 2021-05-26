import React from "react"
import styled from "styled-components"
import {media, mixins} from "../../style/vars-mixins/_index"
import ControlContext from "./ControlContext"
import Filter from "./Filter"
import Sort from "./Sort"
import Search from "./Search"

const Controls = (props) => {
	return (
		<ControlContext.Provider value={props}>
			<Container>
				<ControlWrap>
					<Filter/>
				</ControlWrap>
				<SortWrap>
					<Sort/>
				</SortWrap>
				<SearchWrap>
					<Search/>
				</SearchWrap>
			</Container>
		</ControlContext.Provider>
	)
}
export default Controls

const Container = styled.div`
	${mixins.flexColumn};
	${media.md`
		${mixins.flexRowWrap};
	`}
`
const ControlWrap = styled.div`
	${mixins.flexColumn};
	justify-content: flex-end;
	padding: 30px 0 0;
	flex: 1;
	${media.md`
		flex: 0 0 50%;
	`}
	${media.lg`
		padding: 40px 10px 0;
		flex: 3;
	`}
`
const SortWrap = styled(ControlWrap)`
	order: 2;
`
const SearchWrap = styled(ControlWrap)`
	order: 1;
	${media.md`
		flex: 1 0 100%;
		order: 3;
	`}
	${media.lg`
		flex: 4;
	`}
`
