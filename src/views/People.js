import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { Context } from "../store/AppContext"

const People = () => {
    const {store, actions} = useContext(Context)
    
    
    const people = store.people.map(person => {
        return (
            
                <div key={person.name} className="card text-white bg-dark border border-5 border-light rounded mb-4 me-3 col-4">
                    <div className="card-body">
                        <div className="px-2 py-1 bg-secondary inside-borders-vehicle">
                            <h5 className="text-start card-title mb-1 text-black text-truncate">{person.name}</h5>
                        </div>
                        <img src={`https://starwars-aws.s3.amazonaws.com/img/characters/${person.name}.jpg`} className="card-img-top rounded mx-auto d-block display-image inside-borders-vehicle mt-3 mb-1" alt="..." />
                        <p className="text-start text-black bg-secondary px-2 mx-0 mb-1 inside-borders-vehicle card-class"></p>
                        <div className="card-text text-black card-body-font-size inside-borders-vehicle px-3 py-2">
                            <dl className="row">
                                <dt className="col-sm-4 text-start">Height:</dt><dd className="col-sm-8 text-start"> {person.height} cm</dd>
                                <dt className="col-sm-4 text-start">Mass:</dt> <dd className="col-sm-8 text-start"> {person.mass} kg</dd>
                                <dt className="col-sm-4 text-start">Hair color:</dt> <dd className="col-sm-8 text-start"> {person.hair_color}</dd>
                                <dt className="col-sm-4 text-start">Skin color:</dt> <dd className="col-sm-8 text-start"> {person.skin_color}</dd>
                                <dt className="col-sm-4 text-start">Eye color:</dt> <dd className="col-sm-8 text-start"> {person.eye_color}</dd>
                            </dl>
                        </div>
                        <div className="d-flex my-1 flex-row justify-content-between align-items-center">
                                <Link to="/details" >
                                    <button onClick={() => actions.setDetails(person.url)}>
                                        More info
                                    </button>
                                </Link>
                                <button onClick={() => actions.addToFavorites(person.name, person.url)} className="fav-btn mt-2"></button>
                        </div>
                    </div>
                </div>
        
        )
    })

    return (
        <div className="container overflow-auto">
            <div className="d-flex flex-row text-center">
                {people}
            </div>
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={() => actions.previousPeoplePage()}>Previous</button>
                    </li>
                    {store.totalPeoplePages > 3 &&
                        <>
                            <li className="page-item"><button className="page-link" onClick={() => actions.setPeoplePage(1)}>1</button></li>
                            <li className="page-item"><button className="page-link" onClick={() => actions.setPeoplePage(2)}>2</button></li>
                            <li className="page-item"><button className="page-link" onClick={() => actions.setPeoplePage(3)}>3</button></li>
                        </>
                    }
                    <li className="page-item">
                        <button className="page-link" onClick={() => actions.nextPeoplePage()}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default People