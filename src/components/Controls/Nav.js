import React, {useState} from "react"
import {useGlobalState} from "../../service/globalState"
import {apiCall} from "../../service/apiCalls"
import {ArrowBack, ArrowForward, Autorenew} from "@material-ui/icons"
import styled from "styled-components"
import {media, mixins} from "../../style/vars-mixins/_index"

const Nav = () => {
	const [gamesData, setGamesData] = useGlobalState("gamesData")
	const [isNavLoading, setIsNavLoading] = useState(false)
	const [currentPage, setCurrentPage] = useGlobalState("currentPage")
	const prevPage = useGlobalState("prevPage")
	const nextPage = useGlobalState("nextPage")

	const turnThePage = async(newPageUrl) => {
		if (newPageUrl) {
			setIsNavLoading(true)
			await apiCall(setGamesData, undefined, newPageUrl)
			// get current page
			const urlParams = new URLSearchParams(newPageUrl)
			const page = urlParams.get("page")
			page ? setCurrentPage(page) : setCurrentPage(1)
			setIsNavLoading(false)
		}
	}

	return (
		<Navbar>
			<ArrowBack
				onClick={() => turnThePage(prevPage)}
				className={"hover"}
			/>
			<Page>
				{isNavLoading
					? <Autorenew fontSize={"small"}/>
					: <span>{currentPage}</span>
				}
			</Page>
			<ArrowForward
				onClick={() => turnThePage(nextPage)}
				className={"hover"}
			/>
		</Navbar>
	)
}
export default Nav

const Navbar = styled.nav`
	margin: 30px 0;
	${mixins.flexRow};
	${media.lg`
		${mixins.flexCentered};
	`}
`
const Page = styled.p`
	width: 200px;
	text-align: center;
	font-size: 18px;
	line-height: 1;
	font-weight: bold;
	margin-bottom: 0;
`
