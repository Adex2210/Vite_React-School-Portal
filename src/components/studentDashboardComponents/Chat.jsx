import React, { useEffect, useState, useRef } from "react";
import ChatMessenger from "./ChatMessenger";
import socketClient from "socket.io-client";
import OnlineUser from "./OnlineUser";

const Chat = ({ socket }) => {
  //   let socketRef = useRef();
  //   const endpoint = "http://localhost:2000";
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    // console.log(username, room);
    if (username !== "" && room !== "") {
      socket.current.emit("join room", room);
//       setShowChat(true)
    } else {
    }
  };

  //     useEffect(() => {

  //     }, [socket])

  return (
    <>
      {/* {!showChat ? ( */}
      <div className="w-100 d-flex gap-3 h-100">

      
        <div className="d-grid justify-content-center gap-3 border" style={{width: '25%'}}>
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Adex..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      {/* ) : ( */}
        <ChatMessenger socket={socket} username={username} room={room} />
        <OnlineUser/>
        </div>
      {/* )} */}
    </>
  );
};

export default Chat;