import { useEffect, useState } from "react"
import './ChatUI.css'

export default function(){
    const [listCompetences, setListCompetences]:any = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8081/getSkills')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setListCompetences(data)
        })
    },[])

    if(listCompetences)
    return (
        <div className="competences-container">
          <h1>Competences</h1>
          <div className="scrollable-container">
            {listCompetences.map((competence:any) => (
              <button key={competence.id} className="skill-button">
                {competence.skill}
              </button>
            ))}
          </div>
        </div>
      );
    else{
        return(
            <>
            chargement
            </>
        )
    }
}