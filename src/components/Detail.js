/* eslint-disable react/prop-types */
import React, {useEffect} from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

function Detail() {
    const location = useLocation()
    const navigate = useNavigate()
    const id = useParams()

    useEffect(() => {
        if (location.state === null)
            navigate("/")
    })

    if (location.state) {
        return <span>{location.state.title}</span>
    } else {
        return null
    }
 }

export default Detail;