const getState = ({ getStore, getActions, setStore }) => {
	let apiUrl = "https://swapi.dev/api/"
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: []
		},
		actions: {
			getCharacters: () => {
				fetch(apiUrl + "people")
				.then(resp => resp.json())
				.then(data => setStore({characters:data.results}))
				.catch(error => console.log(error))
			},
			getPlantets: () => {
				fetch(apiUrl + "planets")
				.then(resp => resp.json())
				.then(data => setStore({planets:data.results}))
				.catch(error => console.log(error))
			},
			getStarships: () => {
				fetch(apiUrl + "starships")
				.then(resp => resp.json())
				.then(data => setStore({starships:data.results}))
				.catch(error => console.log(error))
			}
		}
	};
};


export default getState;