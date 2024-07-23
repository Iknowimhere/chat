import React from "react";
import { ChatState } from "../context/ChatContext";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { getuserFull, getuserName } from "../config/Chatlogics";
import { ViewIcon } from "@chakra-ui/icons";
import ProfileModal from "./ProfileModal";

const SingleChat = () => {
  let { user, selectedChat, setSelectedChat } = ChatState();
  console.log("selectedChat", selectedChat);
  return (
    <>
      {!selectedChat ? (
        <Box display="flex" justifyContent="space-between" p={3} borderBottom="1px" borderColor="gray.200">
            <Text fontSize="1.5em" >Select user to start chatting</Text>
        </Box>
      ) : (
          <>
        {
            selectedChat.isGroupChat?(
                <Box display="flex" justifyContent="space-between" p={3}  borderColor="gray.200" alignItems="center">
                    <Text fontSize="1em" fontWeight="500">{selectedChat.chatName.toUpperCase()}</Text>
                    <IconButton icon={<ViewIcon/>}/>
                </Box>
            ):(
              <Box display="flex" justifyContent="space-between" p={3}  borderColor="gray.200" alignItems={"center"}>
                <Text fontSize="1em" fontWeight="500">{getuserName(user.data._id, selectedChat.users).toUpperCase()}</Text>
                <ProfileModal user={getuserFull(user.data._id, selectedChat.users)} >
                <IconButton icon={<ViewIcon/>}/>
                </ProfileModal>
              </Box>  
            )
        }
        </>
      )
      }
    </>
  );
};

export default SingleChat;
