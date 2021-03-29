import React from "react"
import styled from "styled-components"
import {media, colors, mixins} from "../../style/vars-mixins/_index"
import ContentWidth from "../Layout/ContentWidth"
import Filter from "./Filter"
import Sort from "./Sort"
import Search from "./Search"


const Controls = (props) => {

	return (
		<ContentWidth>
			<Container>
				<ControlWrap>
					<Filter/>
				</ControlWrap>
				<ControlWrap>
					<Sort/>
				</ControlWrap>
				<SearchWrap>
					<Search/>
				</SearchWrap>
			</Container>
		</ContentWidth>
	)
}

const Container = styled.div`
	${mixins.flexColumn};
	${media.md`
		${mixins.flexRowWrap};
	`}
`
const ControlWrap = styled.div`
	${mixins.flexColumn};
	justify-content: flex-end;
	padding: 30px 10px;
	flex: 1;
	${media.md`
		flex: 0 0 50%;
	`}
	${media.lg`
		flex: 3;
	`}
`
const SearchWrap = styled(ControlWrap)`
	${media.md`
		flex: 1 0 100%;
	`}
	${media.lg`
		flex: 4;
	`}
`



export default Controls
