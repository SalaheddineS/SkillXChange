import { useEffect, useState } from "react";
import UserInfo from "../../SingleComponents/UserInfo";

import useWebSocket, { ReadyState } from "react-use-websocket";

export default function () {
  const myEmail = localStorage.getItem("email");
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(
    "ws://localhost:3010/chat?email=" + myEmail
  );

  const [listCompetences, setListCompetences]: any = useState([]);
  const [listUsers, setListUsers]: any = useState([]);
  const [listUsersToBeShowed, setListUsersToBeShowed]: any = useState([]);
  const [currentlyChattingWith, setCurrentlyChattingWith]: any = useState("");
  const [inputValue, setInputValue] = useState("");
  const [allMyMessages, setAllMyMessages]: any = useState([]);
  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  useEffect(() => {
    if (lastMessage !== null) {
      setAllMyMessages((prev: any) => prev.concat(lastMessage));
    }
    //Ramener les Tout les competences
    fetch("http://localhost:8081/getSkills")
      .then((response) => response.json())
      .then((data) => {
        setListCompetences(data);
      });

    fetch("http://localhost:8082/getAssociation")
      .then((response) => response.json())
      .then((data) => {
        setListUsers(data);
      });
    fetch("http://localhost:3010/GetMessages?email=" + myEmail)
      .then((response) => response.json())
      .then((data) => {
        setAllMyMessages(data);
      });
  }, [lastMessage]);
  //Handle Clicking on skills and displaying users with that skill
  const handleSkills = (e: any) => {
    const filteredUsers = listUsers.filter(
      (user: any) =>
        (user.skill || user.skillNeeded) === e.skill &&
        user.userEmail !== myEmail
    );
    const filteredData = filteredUsers.filter(
      (item: any, index: any, self: any) => {
        return (
          index === self.findIndex((t: any) => t.userEmail === item.userEmail)
        );
      }
    );
    setListUsersToBeShowed(filteredData);
  };
  const handleSendMessage = () => {
    const message = {
      email: myEmail,
      message: inputValue,
      target: currentlyChattingWith,
    };
    sendJsonMessage(message);
    setAllMyMessages([...allMyMessages, message]);
  };

  const handleCurrentlyChatting = (e: any) => {
    setCurrentlyChattingWith(e.userEmail);
  };

  if (listCompetences)
    return (
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Competences
        </h1>{" "}
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="scrollable-container"
              style={{ overflowX: "auto", maxWidth: "100%" }}
            >
              {listCompetences.map((competence: any) => (
                <button
                  
                  key={competence.id}
                  className="skill-button"
                  onClick={() => handleSkills(competence)}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#333",
                    color: "#fff",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "25px",
                    padding: "10px 20px",
                    marginRight: "10px",
                  }}
                >
                  {competence.skill}
                </button>
              ))}
            </div>
          </div>
          <br></br><br></br>
          <div>
          <div
            className="chat-container"
            style={{
              display: "flex",
              height: "500px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              className="users-list"
              style={{
                width: "30%",
                backgroundColor: "#333",
                color: "#fff",
                padding: "20px",
                overflowY: "auto",
              }}
            >
              {listUsersToBeShowed.map((user: any) => (
                <div
                  key={user.id}
                  onClick={() => handleCurrentlyChatting(user)}
                  style={{ marginBottom: "10px" }}
                >
                  <UserInfo
                    image={user.image}
                    name={user.name}
                    email={user.userEmail}
                  />
                </div>
              ))}
            </div>
            <div
              className="messages-container"
              style={{
                flex: 1,
                padding: "20px",
                backgroundColor: "#222",
                color: "#fff",
                overflowY: "auto",
              }}
            >
              {allMyMessages
      .filter((message: any) => message.target === currentlyChattingWith || message.email === currentlyChattingWith)
      .map((message: any, index: number) => (
        <h1
          key={index}
          style={{
            
            marginBottom: "10px",
            textAlign: message.email === currentlyChattingWith ? "left" : "right",
            backgroundColor: message.email === currentlyChattingWith ? "#ddd" : "#888",
            color: message.email === currentlyChattingWith ? "#000" : "#fff",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {message.message}
        </h1>
      ))}
              <div style={{ height: "50px" }}></div>
            </div>
          </div>
          <div
            className="input-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <input
              className="inputMessages"
              type="text"
              placeholder="Enter your message"
              onChange={(e) => setInputValue(e.target.value)}
              style={{
                width: "70%",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
              }}
            />
            <button
              className="SendMessages"
              onClick={handleSendMessage}
              disabled={readyState !== ReadyState.OPEN}
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#555",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  else {
    return <>chargement</>;
  }
}
