import loginUserAPI from '../services/loginUserAPI'
import registerUserAPI from '../services/registerUserAPI'

const getState = ({ getStore, getActions, setStore }) => {
    const baseUrl = 'https://swapi.dev/api'
    return {
        store: {
            currentUser: null,
            errorMessage: null,
            invalidCredentials: false,
            people: [],
            vehicles: [],
            planets: [],
            peoplePage: 1,
            peopleNextPage: '',
            peoplePreviousPage: '',
            totalPeoplePages: 1,
            vehiclesPage: 1,
            vehiclesNextPage: '',
            vehiclesPreviousPage: '',
            totalVehiclesPages: 1,
            planetsPage: 1,
            planetsNextPage: '',
            planetsPreviousPage: '',
            totalPlanetsPages: 1,
            favorites: [],
            details: []

        },
        actions: {
            loginUser: async (loginFormData, history) => {
                const log = await loginUserAPI(loginFormData).then((data) => {
                    console.log('data en login flux', data)
                    if(data.status == 200) {
                        setStore({...getStore, currentUser: data.user[0]})
                        setStore({...getStore, token: data.token})
                        localStorage.setItem("jwt-token", data.token);
                        history.push("/private")
                    } else {
                        setStore({...getStore, invalidCredentials: true})
                        setStore({...getStore, errorMesage: data.message})
                        history.push("/register")
                        
                    }
                })
            },

            registerUser: async (registerFormData, history) => {
                const us = await registerUserAPI(registerFormData).then((data) => {
                    console.log(data)
                      
                    if(data.status == 200) {
                        setStore({...getStore, currentUser: 1})
                        setStore({...getStore, token: data.token})
                        localStorage.setItem("jwt-token", data.token);
                    } else {
                        setStore({...getStore, errorMesage: data.message}) 
                        history.push("/register")
                    }
                })
            },
            logout: () => {
                setStore({...getStore, currentUser: null})
                setStore({...getStore, token: null})
            }, 

            getPersons: () => {
                fetch(`${baseUrl}/people`)
                .then(data => data.json())
                .then(res => setStore({ people: res.results, peopleNextPage: res.next, peoplePreviousPage: res.previous, totalPeoplePages: Math.floor(res.count / 10 + 1 )}))
            },
            getVehicles: () => {
                console.log(`${baseUrl}/vehicles/?page=${getStore().vehiclesPage}`)
                fetch(`${baseUrl}/vehicles/?page${getStore().vehiclesPage}`)
                .then(data => data.json())
                .then(res => setStore({ vehicles: res.results, vehiclesNextPage: res.next, vehiclesPreviousPage: res.previous, totalVehiclesPages: Math.floor(res.count / 10 + 1 )}))
            },
            getPlanets: () => {
                fetch(`${baseUrl}/planets`)
                .then(data => data.json())
                .then(res => setStore({ planets: res.results, planetsNextPage: res.next, planetsPreviousPage: res.previous, totalPlanetsPages: Math.floor(res.count / 10 + 1 )}))
            },
            nextVehiclesPage: () => {
                fetch(getStore().vehiclesNextPage)
                .then(data => data.json())
                .then(res => setStore({ vehicles: res.results, vehiclesNextPage: res.next, vehiclesPreviousPage: res.previous}))
            },
            previousVehiclesPage: () => {
                fetch(getStore().vehiclesPreviousPage)
                .then(data => data.json())
                .then(res => setStore({ vehicles: res.results, vehiclesNextPage: res.next, vehiclesPreviousPage: res.previous}))
            },
            setVehiclesPage: (page)=> {
                fetch(`${baseUrl}/vehicles/?page=${page}`)
                .then(data => data.json())
                .then(res => setStore({ vehicles: res.results, vehiclesNextPage: res.next, vehiclesPreviousPage: res.previous}))
            },
            nextPeoplePage: () => {
                fetch(getStore().peopleNextPage)
                .then(data => data.json())
                .then(res => setStore({ people: res.results, peopleNextPage: res.next, peoplePreviousPage: res.previous}))
            },
            previousPeoplePage: () => {
                fetch(getStore().peoplePreviousPage)
                .then(data => data.json())
                .then(res => setStore({ people: res.results, peopleNextPage: res.next, peoplePreviousPage: res.previous}))
            },
            setPeoplePage: (page)=> {
                fetch(`${baseUrl}/people/?page=${page}`)
                .then(data => data.json())
                .then(res => setStore({ people: res.results, peopleNextPage: res.next, peoplePreviousPage: res.previous}))
            },
            nextPlanetsPage: () => {
                fetch(getStore().planetsNextPage)
                .then(data => data.json())
                .then(res => setStore({ planets: res.results, planetsNextPage: res.next, planetsPreviousPage: res.previous}))
            },
            previousPlanetsPage: () => {
                fetch(getStore().planetsPreviousPage)
                .then(data => data.json())
                .then(res => setStore({ planets: res.results, planetsNextPage: res.next, planetsPreviousPage: res.previous}))
            },
            setPlanetsPage: (page)=> {
                fetch(`${baseUrl}/planets/?page=${page}`)
                .then(data => data.json())
                .then(res => setStore({ planets: res.results, planetsNextPage: res.next, planetsPreviousPage: res.previous}))
            },
            setDetails: (url) => {
                fetch(url)
                .then(data => data.json())
                .then(res => setStore({ details: res }))
            },

            // getImage: (type, name) => {
            //     console.log('type: ', type, 'name: ', name)
            //     setStore({ imageUrl: `https://starwars-aws.s3.amazonaws.com/img/${type}/${name}.jpg`})
            // },
            addToFavorites: (name, url) => {
                let newObj = { name: name, url: url}
                setStore({favorites: getStore().favorites.concat(newObj)})
                console.log(getStore().favorites)
            },
            deleteFromFavorites: (name) => {
                let newObj = getStore().favorites.filter( (fav) => fav.name !== name)
                setStore({favorites: newObj})
            }

        }
    };
};

export default getState;