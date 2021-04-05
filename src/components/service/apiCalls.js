import {config} from "../data/config"
const options = config.options
const API_KEY = config.apiKey
const pageSize = 6

export const requestURLs = {

	URLgamesList: `https://api.rawg.io/api/games?page_size=${pageSize}&key=${API_KEY}`,
	URLratingDesc: `https://api.rawg.io/api/games?ordering=-rating&page_size=${pageSize}&key=${API_KEY}`,
	URLratingAsc: `https://api.rawg.io/api/games?ordering=rating&page_size=${pageSize}&key=${API_KEY}`,
	URLreleasedDesc: `https://api.rawg.io/api/games?ordering=-released&page_size=${pageSize}&key=${API_KEY}`,
	URLreleasedAsc: `https://api.rawg.io/api/games?ordering=released&page_size=${pageSize}&key=${API_KEY}`,
	URLsearch: `https://api.rawg.io/api/games?page_size=${pageSize}&key=${API_KEY}&search=`,
	URLplatforms: `https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`,
	URLgamesByPlatform: `https://api.rawg.io/api/games?page_size=${pageSize}&key=${API_KEY}&parent_platforms=`,

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
