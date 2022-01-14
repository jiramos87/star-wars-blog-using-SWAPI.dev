import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Context } from '../store/AppContext'

const Private = () => {
    const { store, actions } = useContext(Context)
    const history = useHistory()

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
            {store.currentUser  === null ? 
                history.push('/home')
                :
                <ul>
                    <li>Hola private</li>
                {favList}
                </ul>
            }
        </div>
    )
}

export default Private