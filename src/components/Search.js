import React,{useEffect, useState} from "react";
import axios from 'axios';
import "./Login.css";
import { Link  } from "react-router-dom"


export default function Search(){
    const[srt,setSrt]=useState([]);
    const [searchTerm,setSearchTerm]=useState("")
    useEffect(()=>{
        axios.get("https://retoolapi.dev/EC93Qc/data")
        .then((resp)=>{setSrt(resp.data)})
    },[])

console.log(srt)
    return(
        <div>
              <div className="top">
          <h3 className="cardHead">Welcome to Portal</h3></div>
        <div class="searchContainer">
          
                <input class="searchBox" placeholder="Search for anything..." type="text" onChange={(event)=>{
                    setSearchTerm(event.target.value);
                }}/>
        <div>
            <div></div>
        </div>
            {
                // sample.map((m)=><div>{m.name}</div>)
                srt.filter((val)=>{
                    if(searchTerm == ""){
                        return val
                    }
                    else if(val.Name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((s)=> <Link to={`/card/${s.id}`}><div class="dataRow"><div class="rowText">{s.Name}  {s.Profession}  {s.Joining}</div></div></Link>)
    }
        </div>
        </div>
    )
}
