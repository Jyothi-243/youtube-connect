import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from "../utils/searchSlice";


const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    console.log("search Caheeeee", searchCache[searchQuery]);

    const dispatch = useDispatch();

    useEffect(() => {
        // getSearchSuggestions();

        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            }
            else {
                // getSearchSuggestions();
            }
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    /** 
     * key -i (when we type the i in keyboard)
     * -render the component
     * -it will call the useEffect (makes api call)
     * -start timer() =>make the api call after 200ms
     * -
     * -key - ip
     * -destroy the component (useEffect return method)
     * -re-render the component
     * -useEffect()
     * -start timer() =>make the api call after 200ms (new timer)
     */

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        console.log("Suggs", suggestions);

        dispatch(cacheResults({
            [searchQuery]: json[1],  //here we have to pass the key and value  , we will retrieve based on the key .
        }))

    }

    const toggleMenuBar = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='head-container'>
            <div className='icon-container'>
                <img
                    // onClick={toggleMenuBar} //both are correct 
                    onClick={() => toggleMenuBar()}
                    className="menu-logo" src="https://www.svgrepo.com/show/506800/burger-menu.svg" alt="hamburger-logo" />
                <img className='youtube-icon' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png" alt="youtube-icon" />
            </div>
            <div className='search-container'>
                <input name="search" placeholder='search '
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value) }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)} />
                <button>🔍 </button>
                {showSuggestions && (<div className='search-options'>
                    <ul>
                        {suggestions.map((sugg) => <li key={sugg}> 🔍 {sugg}</li>)}
                    </ul>
                </div>)}

            </div>

            <div>
                <img className="user-icon" alt="user-icon" src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg" />
            </div>

        </div>
    )
}

export default Head; 