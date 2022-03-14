import React,{useEffect, useState} from "react";
import axios from 'axios';
import "./Search.css";
import "./Login.css";
import { Link  } from "react-router-dom"

import { useParams} from "react-router"

export default function Card(){
    let dataParams = useParams()
    let [data, setData] = useState({})
    useEffect(()=>{
        axios.get("https://retoolapi.dev/EC93Qc/data/"+dataParams.id)
        .then((resp)=>{setData(resp.data)})
    },[])
    // console.log("data"+dataParams.id)
    return(
      <div><div className="top">
          <Link to="/search"><img src="C:\Users\mandar.ramesh.kulal\Downloads"></img></Link>
          <h3 className="cardHead">{data.Name}</h3></div>
        <div className="mainCard">
        <div className="card"> 
            <div className="cardText">Name:{data.Name}</div>
            <div className="cardText">Profession:{data.Profession}</div>
            <div className="cardText">Joined:{data.Joining}</div>

        </div></div></div>
    )
}
