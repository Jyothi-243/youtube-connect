import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    const homeOptions = ["Home", "Shorts", "Library", "History", "Watch Later", "Liked Videos"];
    const subscriptionOptions = ["Music", "Sports", "Gaming", "Movies",];

    // if(!isMenuOpen) return null; // early return or we can use ternary condition.  //braces for the whole component. 

    return (
        isMenuOpen && (
            <div className='menu-container'>
                <ul>
                    <b><Link to="/">Home</Link></b>
                    {homeOptions.map((option) => {
                        return (
                            <li key={option}>{option}</li>
                        )
                    })}
                </ul>
                <ul>
                    <b>Subscriptions</b>
                    {subscriptionOptions.map((option) => {
                        return (
                            <li key={option}>{option}</li>
                        )
                    })}
                </ul>
            </div>
        )
    )
}

export default Sidebar;