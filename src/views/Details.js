import React, {useContext} from "react"
import { Context } from "../store/AppContext"

const Details = () => {
    const {store, actions} = useContext(Context)
  
    return (
            <div className="container">
                <div className="row">
                    <div className="display-1 text-center card-title mb-1 text-white">
                        {store.details.name}
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                         <img src={`https://starwars-aws.s3.amazonaws.com/img/characters/${store.details.name}.jpg`} 
                         className="rounded mx-auto d-block display-image-details mt-3 mb-1"/>
                    </div>
                    <div className="col-7">
                        <div className="text-center mt-5"> 
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="d-flex flex-row justify-content-between">
                            <div className="col-sm-2 d-flex flex-column">
                                <div className="text-center">Height:</div>
                                <div className="text-center"> {store.details.height} cm</div>
                            </div>
                            <div className="col-sm-2 d-flex flex-column">
                                <div className="text-center">Mass:</div>
                                <div className="text-center">{store.details.mass} kg</div>
                            </div>
                            <div className="col-sm-2 d-flex flex-column">
                                <div className="text-center">Hair color:</div>
                                <div className="text-center">{store.details.hair_color}</div>
                            </div>
                            <div className="col-sm-2 d-flex flex-column">
                                <div className="text-center">Skin color:</div>
                                <div className="text-center">{store.details.skin_color}</div>
                            </div>
                            <div className="col-sm-2 d-flex flex-column">
                                <div className="text-center">Eye color:</div>
                                <div className="text-center">{store.details.eye_color}</div>
                            </div>
                     </div>
                </div>
            </div>
            
           
    
    )
    
}

export default Details