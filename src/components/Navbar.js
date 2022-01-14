import {Link, useHistory} from 'react-router-dom'
import React, {useContext} from 'react'
import { Context } from '../store/AppContext'

const Navbar = () => {
    const {store, actions} = useContext(Context)
    const history = useHistory()
    const handleLogout = () => {
        actions.logout()
    }

    let favList = store.favorites.length > 0 && store.favorites.map((fav) => {
        return <li key={fav.name} className="d-flex flex-row">
                    <Link to="/details" >
                        <button className="fav-item" onClick={() => actions.setDetails(fav.url)}>
                            {fav.name}
                        </button>
                    </Link>
                    <button className="bg-dark text-white" onClick={ () => actions.deleteFromFavorites(fav.name)} > x </button>
               </li>
        
    }) 

    return (
        <nav className="nav nav-masthead justify-content-center float-md-end">
              <div className="nav-link text-white cursor-pointer" onClick={() => history.push('/home')}>home</div>
              <div className="nav-link text-white cursor-pointer" onClick={() => history.push('/people')}>people</div>
              <div className="nav-link text-white cursor-pointer" onClick={() => history.push('/vehicles')}>vehicles</div>
              <div className="nav-link text-white cursor-pointer" onClick={() => history.push('/planets')}>planets</div>
              { store.currentUser === null ? <>
                <div className="nav-link text-white cursor-pointer" onClick={() => history.push('/login')}>login</div>
                <div className="nav-link text-white cursor-pointer" onClick={() => history.push('/signup')}>signup</div></>
                :
                <div className="nav-link text-white cursor-pointer" onClick={() => handleLogout()}>logout</div>
              }
            
            <div className="dropdown">
                <button className="d-flex flex-row justify-content-between align-items-center btn btn-secondary dropdown-toggle nav-favs" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites <div className="mx-2 px-2 bg-dark rounded">{store.favorites.length}</div>
                </button>

                <ul className="mt-0 border border-2 px-3 dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    { favList}
                    <li><div className="nav-link text-white go-to-favs" onClick={() => history.push('/favorites')}>go to favorites</div></li>
                </ul>
                
            </div>
            
            
        </nav>
    )
}

export default Navbar