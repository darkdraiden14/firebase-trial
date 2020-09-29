import React from 'react'
import loadingGif from "./loading-gear.gif"
export default function Loading() {
    return (
        <div className="loading">
            <h4>Rooms Data Loading...</h4>
            <img src={loadingGif} alt=""/>

        </div>
    )
}
