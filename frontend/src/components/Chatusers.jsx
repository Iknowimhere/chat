import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChatState } from "../context/ChatContext";
import { getuserName } from "../config/Chatlogics";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

export const Chatusers = () => {
  let [loggedUser,setLoggedUser]=useState(null)
  const { user,chats, setChats, selectedChat, setSelectedChat } = ChatState();

let toast=useToast()
  console.log("user is user list",user);

    const fetchChats=async ()=>{
      try {
        let config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        let {data}=await axios.get("http://localhost:5000/api/v1/chat",config)
        console.log(data);
        setChats([...chats,data])
      } catch (error) {
        toast({
          title: "Couldn't fetch chats",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      }
    }

    useEffect(() => {
      let user = JSON.parse(localStorage.getItem("user"));
      setLoggedUser(user);
      if(user){
        fetchChats()
      }
    }, [user]);

  return (
    <Box
      width="40%"
      height="100%"
      boxShadow="0 5px 5px 5px rgba(0,0,0,0.4)"
      padding="1em"
      marginTop="1em"
      marginLeft="0.5em"
      borderRadius="0.5em"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text size="lg" fontWeight="bold">
          My Chats
        </Text>
        <Button iconSpacing="2" rightIcon={<AddIcon />}>
          New Group Chat
        </Button>
      </Box>
      <Box>
        <Stack display="flex" flexDirection="column" gap="2em">
          {
            chats.map((chat) => {
              return (
                <Box
                  key={chat._id}
                  marginTop="1em"
                  borderRadius="0.5em"
                  padding="1em"
                  backgroundColor="teal"
                  color="white"
                  fontWeight="bold"
                  _hover={{ backgroundColor: "#ddd" }}
                  cursor="pointer"
                >
                  <Text fontWeight="bold">{chat.isGroupChat?chat.chatName:getuserName(loggedUser.data._id,chat.users)}</Text>
                </Box>
              );
            })
          }
        </Stack>
      </Box>
    </Box>
  );
};
