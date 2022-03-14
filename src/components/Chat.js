import React, { useRef, useState } from "react";
import Message from "./Message";
import { IoMdSend } from "react-icons/io";

function Chat() {
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      user: "rhinoceros",
      text: "hiii",
      color: "text-green-500",
    },
    {
      user: "zebraharp",
      text: "ayooo",
      color: "text-orange-500",
    },
    {
      user: "peach",
      text: "YOOOOOOOOOOOOOO",
      color: "text-red-500",
    },
    {
      user: "thematrixrat",
      text: "Hello",
      color: "text-orange-500",
    },
    {
      user: "saltpie",
      text: "yo sup",
      color: "text-blue-500",
    },
  ]);

  const handleKeyPress = (e) => {
    if (e.key !== "Enter") return;

    sendMessage();
    inputRef.current.value = "";
  };

  const sendMessage = () => {
    const message = inputRef.current.value;
    if (message === "") return;

    setMessages(
      messages.concat({
        user: "User",
        text: message,
        color: "text-purple-500",
      })
    );
  };

  return (
    <div className="flex flex-col flex-shrink-0 w-80 h-full bg-white border border-gray-300">
      <h2 className="text-sm font-bold text-gray-700 py-3 text-center uppercase border-b">
        Stream Chat
      </h2>
      <div className="flex flex-col gap-1.5 flex-grow p-3 overflow-y-auto">
        {messages.map((message, i) => (
          <Message
            user={message.user}
            text={message.text}
            color={message.color}
            key={i}
          />
        ))}
      </div>
      <div className="flex flex-row p-3 bg-gray-100 hover:outline-2 focus-within:outline-2 outline outline-1 outline-gray-300 rounded-none  items-center">
        <input
          type="text"
          onKeyDown={handleKeyPress}
          ref={inputRef}
          autoFocus
          placeholder="Send a message"
          className="flex flex-grow bg-transparent border-none outline-none"
        />
        <IoMdSend
          onClick={sendMessage}
          className="w-6 h-6 text-gray-500 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Chat;
