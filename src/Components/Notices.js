import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";

export default function Notices({notice}) {
    const {name, slug, type, description} = notice;
    return (
        <article className="room">
        <div className="img-container">
            <div className ="price-top">
                <h6>>{type}</h6>
            </div>
            <Link to={'/notices/${slug}'} className="btn-primary room">Open</Link>
            <p className="room-info">{name}</p>
        </div>
        </article>
    );
}