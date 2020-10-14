import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <h1>Class 29!</h1>
            <nav>
                <ul>
                    <li>
                       <a href="/">href home will Reload App</a>
                    </li>
                    <li>
                       <a href="/list">href List will Reload App</a>
                    </li>
                    <li>
                       <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <NavLink to="/list" activeClassName="list-class">List Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/render-things" activeClassName="list-class">Render Things</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;