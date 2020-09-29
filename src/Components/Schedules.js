import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";

export default function Schedules({schedules}) {
    const {name, slug, type, description} = schedules;
    return (
        <article className="room">
        <div className="img-container">
            <div className ="price-top">
                <h6>>{type}</h6>
            </div>
            <Link to={'/schedules/${slug}'} className="btn-primary room">Open</Link>
            <p className="room-info">{name}</p>
        </div>
        </article>
    );
}