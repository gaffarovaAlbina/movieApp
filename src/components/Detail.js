/* eslint-disable react/prop-types */
import React, {useEffect} from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./Detail.css";
import "../routes/Home.css";

function Detail() {
    const location = useLocation()
    const navigate = useNavigate()
    const id = useParams()

    useEffect(() => {
        if (location.state === null)
            navigate("/")
    })

    if (location.state) {
        const {year, title, summary, poster, genres} = location.state
        return (
            <div className="container">
                <div className="detail_movie">
                    <img src={poster} alt={title} title={title} />
                    <div className="detail_movie__column">
                        <h3 className="detail_movie__title">{title}</h3>
                        <h5 className="detail_movie__year">{year}</h5>
                        <ul className="detail_movie__genres">
                            {genres.map((genre, index) => {
                                return <li key={index} className="genres__genre">{genre}</li>})}
                        </ul>
                        <p className="detail_movie__summary">{summary.slice(0, 140)}...</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
 }

export default Detail;