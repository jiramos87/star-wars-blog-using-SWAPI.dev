import {Link} from 'react-router-dom'
import React, {useContext} from 'react'
import { Context } from '../store/AppContext'

const Favorites = () => {
    const {store, actions} = useContext(Context)

    let favList = store.favorites.length > 0 && store.favorites.map((fav) => {
        return <li key={fav.name} className="d-flex flex-row">
                    <Link to="/details" >
                        <button onClick={() => actions.setDetails(fav.url)}>
                            {fav.name}
                        </button>
                    </Link>
                    <button onClick={ () => actions.deleteFromFavorites(fav.name)} > x </button>
               </li>
        
    })


    return (
        <div className="container-fluid">
            <ul>
            {favList}
            </ul>
        </div>
    )
}

export default Favorites