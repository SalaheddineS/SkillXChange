import { useEffect, useState } from "react"
import UserInfo from "../../SingleComponents/UserInfo"
import './ChatUI.css'

export default function(){
    const [listCompetences, setListCompetences]:any = useState([]);
    const [listUsers, setListUsers]:any = useState([]); 
    useEffect(()=>{
        //Ramener les Tout les competences
        fetch('http://localhost:8081/getSkills')
        .then(response => response.json())
        .then(data => {
            setListCompetences(data)
        })

        fetch('http://localhost:8082/getAssociation')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter((item:any, index:any, self:any) => {
                return index === self.findIndex((t:any) => (
                    t.userEmail === item.userEmail
                ));
            });
            setListUsers(filteredData);
        });
    
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
          <br/><br/>
          {listUsers.map((user:any) => (
            <UserInfo key={user.id} image={""} name={""} email={user.userEmail} />
          )
          )}
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