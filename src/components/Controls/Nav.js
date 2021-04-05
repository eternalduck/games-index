import React, {useState} from "react"
import {useGlobalState} from "../service/globalState"
import {apiCall} from "../service/apiCalls"
import {ArrowBack, ArrowForward, Autorenew} from "@material-ui/icons"
import styled from "styled-components"
import {media, mixins} from "../../style/vars-mixins/_index"

const Nav = (props) => {
	const [gamesData, setGamesData] = useGlobalState("gamesData")
	const [isNavLoading, setIsNavLoading] = useState(false)
	const [currentPage, setCurrentPage] = useGlobalState("currentPage")
	const [prevPage, setPrevPage] = useGlobalState("prevPage")
	const [nextPage, setNextPage] = useGlobalState("nextPage")

	const turnThePage = async(newPageUrl) => {
		if (newPageUrl) {
			setIsNavLoading(true)
			await apiCall(setGamesData, undefined, newPageUrl)
			// get current page
			const urlParams = new URLSearchParams(newPageUrl)
			const page = urlParams.get("page")
			page ? setCurrentPage(page) : setCurrentPage(1)//FAIL
			setIsNavLoading(false)
		}
	}

	// UNFINISHED: infinite scroll based on detection of the lower edge of the games list & calling turnThePage(); we also need to clean first items if the page grows too long..
	// useEffect(() => {
	// //Catch the moment we have scrolled to the bottom of <ListWrap>
	// 	const detectEnd = () => {
	// 		let scrollTop
	// 		let winHeight = window.innerHeight
	// 		let listHeight
	// 		window.addEventListener("scroll", function () {
	// 			listHeight = mainGamesList.current.clientHeight
	// 			scrollTop = window.pageYOffset
	// 			if (scrollTop + 1000 > listHeight) {
	// 				mainGamesList.current.style.outline = "3px solid magenta"
	// 				turnThePage("next")
	// 			}
	// 		})//scroll
	// 	}
	// 	// detectEnd()
	// 	// return () => window.removeEventListener("scroll", detectEnd)
	// }, [])

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
