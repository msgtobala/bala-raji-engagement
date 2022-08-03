/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';

import { Loader } from '../Loader/Loader';
import BotResponse from '../Responses/BotResponse';
import UserResponse from '../Responses/UserResponse';
import { StyledBotMessages } from './BotMessages.styled';

const renderChat = (response, audioRef, videoRef) => {
  return (
    <>
      {response.sender === 'user' ? (
        <UserResponse key={response.id} response={response} />
      ) : (
        <BotResponse
          key={response.id}
          response={response}
          audioRef={audioRef}
          videoRef={videoRef}
        />
      )}
    </>
  );
};

const BotMessages = (props) => {
  const {
    chatRef,
    chatData,
    isBotTyping,
    resetBotTyping,
    audioRef,
    videoRef,
    scrollToBottom,
  } = props;

  const [messages, setMessages] = useState([]);

  let chatIndex = useRef(0);

  const createMessagesList = (chats = []) => {
    const currentChat = chats[chatIndex.current];
    if (chatIndex.current < chats.length) {
      const updatedMessages = [...messages];
      updatedMessages.push({
        id: new Date(),
        type: currentChat.type,
        chat: currentChat.chat,
        sender: currentChat.sender,
      });
      chatIndex.current += 1;
      setTimeout(() => {
        setMessages(updatedMessages);
      }, 500);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const currentChat = chatData[chatIndex.current];
    const timeout = setTimeout(
      () => {
        if (chatIndex.current < chatData.length && currentChat) {
          const updatedMessages = [...messages];
          updatedMessages.push({
            id: new Date(),
            type: currentChat.type,
            chat: currentChat.chat,
            link: currentChat?.link ?? null,
            sender: 'bot',
          });
          chatIndex.current += 1;
          setMessages(updatedMessages);
        } else if (chatIndex.current === chatData.length) {
          resetBotTyping();
        }
      },
      chatIndex.current === chatData.length
        ? 0
        : currentChat?.type === 'text1'
        ? 3000
        : 1000
    );

    return () => clearTimeout(timeout);
  }, [messages]);

  useEffect(() => {
    chatIndex.current = 0;
    createMessagesList(chatData);
  }, [chatData, chatData.length]);

  return (
    <StyledBotMessages ref={chatRef} isBotTyping={isBotTyping}>
      {messages.length ? (
        messages.map((chat) => renderChat(chat, audioRef, videoRef))
      ) : (
        <></>
      )}
      {isBotTyping && <Loader />}
    </StyledBotMessages>
  );
};

export default BotMessages;
