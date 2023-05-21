import { useEffect, useState } from "react"
import UserInfo from "../../SingleComponents/UserInfo"
import './ChatUI.css'

export default function(){
    const myEmail = localStorage.getItem('email')
    const [listCompetences, setListCompetences]:any = useState([]);
    const [listUsers, setListUsers]:any = useState([]);
    const [listUsersToBeShowed, setListUsersToBeShowed]:any = useState([]); 
    const [currentlyChattingWith, setCurrentlyChattingWith]:any = useState('');
    const [inputValue, setInputValue] = useState('');
    const [allMyMessages, setAllMyMessages]:any = useState([]);
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
        fetch('http://localhost:3010/GetMessages?email='+ myEmail)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setAllMyMessages(data)
        })
    },[])
    //Handle Clicking on skills and displaying users with that skill
    const handleSkills=(e:any)=> {
        
        const filteredUsers = listUsers.filter((user:any)=> ((user.skill||user.skillNeeded) === e.skill) && user.userEmail !== myEmail)
        const filteredData = filteredUsers.filter((item:any, index:any, self:any) => {
            return index === self.findIndex((t:any) => (
                t.userEmail === item.userEmail
            ));
        });
        setListUsersToBeShowed(filteredData)
    }
    const handleSendMessage = () => {
        
        const message ={
            email: myEmail,
            message: inputValue,
            target : currentlyChattingWith,
            date : new Date()
        }

        setAllMyMessages([...allMyMessages, message])
    }
    const handleCurrentlyChatting = (e:any) => {
        setCurrentlyChattingWith(e.userEmail)
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
          <div onClick={ () => handleCurrentlyChatting(user) }>  
          <UserInfo key={user.id} image={user.image} name={user.name} email={user.userEmail}  />
          </div>
        ))}
      </div>
    
      {}
      {allMyMessages.map((message:any) => (
        <div className="message-container"> {message.message} </div>
      ))}
      <input
        className="input-dark"
        type="text"
        placeholder="Enter your message"
        onChange={(e) => setInputValue(e.target.value)}
      />
        <button className="button-dark" onClick={handleSendMessage} >Send</button>
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