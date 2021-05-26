import {config} from "../data/config"
const options = config.options
const API_KEY = process.env.API_KEY
const baseURL = "https://api.rawg.io/api"
const pageSize = 6

export const requestURLs = {
	URLgamesList: `${baseURL}/games?page_size=${pageSize}&key=${API_KEY}`,
	URLratingDesc: `${baseURL}/games?ordering=-rating&page_size=${pageSize}&key=${API_KEY}`,
	URLratingAsc: `${baseURL}/games?ordering=rating&page_size=${pageSize}&key=${API_KEY}`,
	URLreleasedDesc: `${baseURL}/games?ordering=-released&page_size=${pageSize}&key=${API_KEY}`,
	URLreleasedAsc: `${baseURL}/games?ordering=released&page_size=${pageSize}&key=${API_KEY}`,
	URLsearch: `${baseURL}/games?page_size=${pageSize}&key=${API_KEY}&search=`,
	URLplatforms: `${baseURL}/platforms/lists/parents?key=${API_KEY}`,
	URLgamesByPlatform: `${baseURL}/games?page_size=${pageSize}&key=${API_KEY}&parent_platforms=`,
	URLgame: slug => `${baseURL}/games/${slug}?key=${API_KEY}`,
	URLscreens: slug => `${baseURL}/games/${slug}/screenshots?key=${API_KEY}`,
}

// Component's setState & loading detector are passed as handlers
export const apiCall = async(handler, loadingHandler, url) => {
	loadingHandler && loadingHandler(true)// reset loading
	try {
		await fetch(url, options)
		.then(res => res.json())
		.then(data => handler(data))
		.then(loadingHandler && loadingHandler(false))
	} catch(e) {
		handler(null)
		console.error("aaa main fetch failed!")
	}
}
