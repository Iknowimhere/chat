import React, { useState } from "react";
import { Chatusers } from "./Chatusers";
import { ChatWindow } from "./ChatWindow.jsx";
import Chatnav from "./Chatnav";
import { ChatState } from "../context/ChatContext.jsx";
import { Box } from "@chakra-ui/react";

export const ChatBox = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  let { user } = ChatState();
  // console.log("user",user);
  return (
    <div>
      {user && <Chatnav />}
      <Box display={"flex"}>
        {user && <Chatusers />}
        {user && (
          <ChatWindow fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};
