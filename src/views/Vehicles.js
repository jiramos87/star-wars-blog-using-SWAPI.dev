import React, {useContext} from "react"
import { Context } from "../store/AppContext"
import { Link } from "react-router-dom"

const Vehicles = () => {
    const {store, actions} = useContext(Context)
    
    
    const vehicles = store.vehicles.map(vehicle => {
        return (
            
                <div key={vehicle.name} className="card text-white bg-dark border border-5 border-light rounded mb-4 me-3 col-4">
                    <div className="card-body">
                        <div className="px-2 py-1 bg-secondary inside-borders-vehicle">
                            <h5 className="text-start card-title mb-1 text-black text-truncate">{vehicle.name}</h5>
                        </div>
                        <img src={`https://starwars-aws.s3.amazonaws.com/img/vehicles/${vehicle.name}.jpg`} className="card-img-top rounded mx-auto d-block display-image inside-borders-vehicle mt-3 mb-1" alt="..." />
                        <p className="text-start text-black bg-secondary px-2 mx-0 mb-1 inside-borders-vehicle card-class">{vehicle.vehicle_class.charAt(0).toUpperCase()+vehicle.vehicle_class.slice(1)} vehicle</p>
                        <div className="card-text card-text-vehicle text-black card-body-font-size inside-borders-vehicle px-3 pb-0">
                            <dl className="row">
                                <dt className="col-sm-4 text-start">Model:</dt><dd className="col-sm-8 text-start"> {vehicle.model}</dd>
                                <dt className="col-sm-4 text-start">Manufact:</dt> <dd className="col-sm-8 text-start"> {vehicle.manufacturer}</dd>
                                <dt className="col-sm-4 text-start">Cost:</dt> <dd className="col-sm-8 text-start"> {vehicle.cost_in_credits} credits</dd>
                                <dt className="col-sm-4 text-start">Length:</dt> <dd className="col-sm-8 text-start"> {vehicle.length} m</dd>
                                <dt className="col-sm-4 text-start">Speed:</dt> <dd className="col-sm-8 text-start"> {vehicle.max_atmosphering_speed} km/h</dd>
                            </dl>
                        </div>
                        <div className="d-flex my-1 flex-row justify-content-between align-items-center">
                                <Link to="/details" >
                                    <button onClick={() => actions.setDetails(vehicle.url)}>
                                        More info
                                    </button>
                                </Link>
                                <button onClick={() => actions.addToFavorites(vehicle.name, vehicle.url)} className="fav-btn mt-2"></button>
                        </div>
                    </div>
                </div>
        
        )
    })

    return (
        <div className="container overflow-auto">
            <div className="d-flex flex-row text-center">
                {vehicles}
            </div>
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={() => actions.previousVehiclesPage()}>Previous</button>
                    </li>
                    {store.totalVehiclesPages > 3 &&
                        <>
                            <li className="page-item"><button className="page-link" onClick={() => actions.setVehiclesPage(1)}>1</button></li>
                            <li className="page-item"><button className="page-link" onClick={() => actions.setVehiclesPage(2)}>2</button></li>
                            <li className="page-item"><button className="page-link" onClick={() => actions.setVehiclesPage(3)}>3</button></li>
                        </>
                    }
                    <li className="page-item">
                        <button className="page-link" onClick={() => actions.nextVehiclesPage()}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Vehicles