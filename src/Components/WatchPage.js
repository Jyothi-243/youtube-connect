import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';


const WatchPage = () => {

    const [searchParams] = useSearchParams();

    console.log(searchParams.get("v"));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [])


    return (
        <div className='watch-container'>
            <div className='watch-video-container'>
                <iframe width="1200" height="600"
                    src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    // referrerpolicy="strict-origin-when-cross-origin"
                    ></iframe>
            </div>
            <CommentsContainer/>
        </div>

    )
}

export default WatchPage; 