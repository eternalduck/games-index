import {createGlobalState} from "react-hooks-global-state"

export const {useGlobalState} = createGlobalState({
	isLoading: true,
	currentPage: 1,
	gamesData: null,
	prevPage: null,
	nextPage: null,
	searchTerm: "",
	platformId: "",

})
