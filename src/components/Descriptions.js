import React from "react";
import { useParams } from "react-router-dom";
import "./Descriptions.css"
import {useNavigate} from 'react-router-dom'


const Descriptions = ({AllMovies}) => {
   
    const {id} = useParams();
    const movi = AllMovies.find((e)=>e.id===id)


    
        const navigate = useNavigate();
        const goBack = () => {
            navigate(-1);
        }
    

    

  return (
    
    <div className="des-position">
        <h1> Film :{movi.title}</h1>
        <iframe
        width="560"
        height="315"
        src= {movi.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       
      ></iframe>
           <div className="des-des">{movi.description}</div> 
          
           <button onClick={goBack}>Back To Home </button>	
    </div>
    
  );
};

export default Descriptions;
