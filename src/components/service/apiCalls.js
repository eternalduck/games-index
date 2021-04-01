// some component's setState is passed as handler
// TODO fetch options with header, etc should be here
export const apiCall = async(url, handler) => {
	const response = await fetch(url)
	.then(res => res.json())
	.then(data => handler(data))
}

//ZB 1
// useEffect(() => {
//   fetch('http://127.0.0.1:8000/api/v1/products/all')
//     .then((res) => res.json())
//     .then((data) => setProductsList([...data]))
//     .then(setisLoading(false));
// }, []);

// ZB 2
// let parsedResult
// const NEWapiCall = async (url, handler, options) => {
//   // (I.) promise to return the parsedResult for processing
//   const rawgRequest = () => {
//     return new Promise((resolve, reject) => {
//       request(options, (error, response, body) => {
//         try {
//           resolve(JSON.parse(body))
//         } catch (e) {
//           reject(e)
//         }
//       })
//     })
//   }
//
//   // (II.)
//   try {
//     parsedResult = await rawgRequest()
//   } catch (e) {
//     console.error(e)
//   }
//   return parsedResult
// }
