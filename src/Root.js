import React from "react"
import {Switch, Route} from "react-router-dom"
import GlobalStyle from "./style/GlobalStyle"
import IndexPage from "./components/GamesIndex/IndexPage"
import GamePage from "./components/GamesIndex/GamePage"
import Page404 from "./components/Page404/Page404"

export default function Root(){
	return(
			<>
			<GlobalStyle/>
			<Switch>
				<Route exact path="/" component={IndexPage}/>
				<Route exact path={`/game/:slug`}>
					<GamePage/>
				</Route>
				<Route component={Page404}/>
			</Switch>
			</>
	)
}
