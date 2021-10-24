import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { Context } from "../store/AppContext"

const Planets = () => {
    const {store, actions} = useContext(Context)
    
    
    const planets = store.planets.map(planet => {
        return (
            
                <div key={planet.name} className="card text-white bg-dark border border-5 border-light rounded mb-4 me-3 col-4">
                    <div className="card-body">
                        <div className="px-2 py-1 bg-secondary inside-borders-vehicle">
                            <h5 className="text-start card-title mb-1 text-black text-truncate">{planet.name}</h5>
                        </div>
                        <img src={`https://starwars-aws.s3.amazonaws.com/img/planets/${planet.name}.jpg`} className="card-img-top rounded mx-auto d-block display-image inside-borders-vehicle mt-3 mb-1" alt="..." />
                        <p className="text-start text-black bg-secondary px-2 mx-0 mb-1 inside-borders-vehicle card-class"></p>
                        <div className="card-text text-black card-body-font-size inside-borders-vehicle px-3 py-2">
                            <dl className="row">
                            <dt className="col-sm-4 text-start">Population:</dt> <dd className="col-sm-8 text-start"> {planet.population}</dd>
                            <dt className="col-sm-4 text-start">Climate:</dt><dd className="col-sm-8 text-start"> {planet.climate}</dd>
                            <dt className="col-sm-4 text-start">Diameter:</dt> <dd className="col-sm-8 text-start"> {planet.diameter} km</dd>
                            <dt className="col-sm-4 text-start">Rotation:</dt> <dd className="col-sm-8 text-start"> {planet.rotation_period} days</dd>
                            <dt className="col-sm-4 text-start">Traslation:</dt> <dd className="col-sm-8 text-start"> {planet.orbital_period} days</dd> 
                        </dl>
                        </div>
                        <div className="d-flex my-1 flex-row justify-content-between align-items-center">
                                <Link to="/details" >
                                    <button onClick={() => actions.setDetails(planet.url)}>
                                        More info
                                    </button>
                                </Link>
                                <button onClick={() => actions.addToFavorites(planet.name, planet.url)} className="fav-btn mt-2"></button>
                        </div>
                    </div>
                </div>
        )
    })

    return (
        <div className="container overflow-auto">
            <div className="d-flex flex-row text-center">
                {planets}
            </div>
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={() => actions.previousPlanetsPage()}>Previous</button>
                    </li>
                    {store.totalPlanetsPages > 3 &&
                        <>
                            <li className="page-item"><button className="page-link" onClick={() => actions.setPlanetsPage(1)}>1</button></li>
                            <li className="page-item"><button className="page-link" onClick={() => actions.setPlanetsPage(2)}>2</button></li>
                            <li className="page-item"><button className="page-link" onClick={() => actions.setPlanetsPage(3)}>3</button></li>
                        </>
                    }
                    <li className="page-item">
                        <button className="page-link" onClick={() => actions.nextPlanetsPage()}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Planets