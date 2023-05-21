import { useEffect, useState } from "react"
import UserInfo from "../../SingleComponents/UserInfo"
import './ChatUI.css'

export default function(){
    const [listCompetences, setListCompetences]:any = useState([]);
    const [listUsers, setListUsers]:any = useState([]);
    const [listUsersToBeShowed, setListUsersToBeShowed]:any = useState([]); 
    const [inputValue, setInputValue] = useState('');
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
            
            setListUsers(data);
        });
    
    },[])
    //Handle Clicking on skills and displaying users with that skill
    const handleSkills=(e:any)=> {
        
        const filteredUsers = listUsers.filter((user:any)=> (user.skill||user.skillNeeded) === e.skill)
        const filteredData = filteredUsers.filter((item:any, index:any, self:any) => {
            return index === self.findIndex((t:any) => (
                t.userEmail === item.userEmail
            ));
        });
        setListUsersToBeShowed(filteredData)
        
    }
    if(listCompetences)
    return (
        <div className="competences-container">
          <h1>Competences</h1>
          <div className="container">
      <div className="scrollable-container">
        {listCompetences.map((competence:any) => (
          <button key={competence.id} className="skill-button" onClick={() => handleSkills(competence)}>
            {competence.skill}
          </button>
        ))}
      </div>

      <div className="info-container">
        {listUsersToBeShowed.map((user:any) => (
          <UserInfo key={user.id} image={user.image} name={user.name} email={user.userEmail} />
        ))}
      </div>

      <input
        className="input-dark"
        type="text"
        placeholder="Enter your message"
        onChange={(e) => setInputValue(e.target.value)}
      />
        <button className="button-dark" >Send</button>
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