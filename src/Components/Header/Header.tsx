// tsrfc
import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Header({}: Props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Shoe Shop</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" to="#" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/search">Search</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">
                        <i className="fa fa-cart-plus fs-3"></i>
                    </NavLink>
                </li>
                
            </ul>
            <form className="d-flex my-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>

)
}
