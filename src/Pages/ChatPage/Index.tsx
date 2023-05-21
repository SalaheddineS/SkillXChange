import { useEffect, useState } from "react"
import UserInfo from "../../SingleComponents/UserInfo"
import './ChatUI.css'
import useWebSocket, { ReadyState } from 'react-use-websocket';


export default function(){

    const myEmail = localStorage.getItem('email')
    const { sendJsonMessage, lastMessage, readyState } = useWebSocket('ws://localhost:3010/chat?email='+myEmail);

    const [listCompetences, setListCompetences]:any = useState([]);
    const [listUsers, setListUsers]:any = useState([]);
    const [listUsersToBeShowed, setListUsersToBeShowed]:any = useState([]); 
    const [currentlyChattingWith, setCurrentlyChattingWith]:any = useState('');
    const [inputValue, setInputValue] = useState('');
    const [allMyMessages, setAllMyMessages]:any = useState([]);
    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
      }[readyState];



    useEffect(()=>{
        if (lastMessage !== null) {
            setAllMyMessages((prev:any) => prev.concat(lastMessage));
          }
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
           
            setAllMyMessages(data)
        })
    },[lastMessage])
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
        }
        sendJsonMessage(message);
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
    
      
     
      {allMyMessages.filter((message:any)=> message.target === currentlyChattingWith).map((message:any)=>(
        <h1>{message.message}</h1>
      ))}
     


      <input
        className="input-dark"
        type="text"
        placeholder="Enter your message"
        onChange={(e) => setInputValue(e.target.value)}
      />
        <button className="button-dark" onClick={handleSendMessage} 
         disabled={readyState !== ReadyState.OPEN}
        >Send</button>
    </div>
    {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
    <span>The WebSocket is currently {connectionStatus}</span>
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