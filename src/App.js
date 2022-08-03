import React, { useState, useEffect, useRef } from 'react';

import Audios from './resources/audios';
import { Bot, BotContainer, BotSection } from './App.styled';
import BotMessages from './components/BotMessages/BotMessages';
import BotFooter from './components/BotFooter/BotFooter';
import { botConfig, buttonConfig, chatInitialData } from './config/config';
import images from './resources/images';

const App = () => {
  const [chatData, setChatData] = useState({});
  const [currentButtonFlow, setCurrentButtonFlow] = useState(buttonConfig);
  const [isBotTyping, setBotTyping] = useState(true);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [userSelection, setUserSelection] = useState(null);

  const audioRef = useRef(false);
  const chatRef = useRef(false);

  const addInitialChatData = () => {
    setChatData(chatInitialData);
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.src = Audios.EngagementSong;
      audioRef.current.play();
    }
  };

  const resetBotTyping = () => {
    setBotTyping(false);
    setShowBottomBar(true);
  };

  const constructBotChatData = (chatId) => {
    const config = botConfig[chatId];
    const botChats = [];
    const botConfigs = Object.keys(config);
    chatId === 'engagement_date' && playAudio();
    for (let chat = 0; chat < botConfigs.length; chat++) {
      if (
        botConfigs[chat] === 'text' ||
        botConfigs[chat] === 'text1' ||
        botConfigs[chat] === 'text2'
      ) {
        const textMessages = config[botConfigs[chat]];
        for (let text = 0; text < textMessages.length; text++) {
          botChats.push({
            type: botConfigs[chat] === 'text1' ? 'text1' : 'text',
            chat: textMessages[text],
            sender: 'bot',
          });
        }
      }

      if (botConfigs[chat] === 'image' || botConfigs[chat] === 'gif') {
        const imageMessages = config[botConfigs[chat]];
        for (let text = 0; text < imageMessages.length; text++) {
          botChats.push({
            type: botConfigs[chat],
            chat: imageMessages[text],
            sender: 'bot',
          });
        }
      }

      if (botConfigs[chat] === 'location') {
        const imageMessages = config[botConfigs[chat]];
        for (let text = 0; text < imageMessages.length; text++) {
          botChats.push({
            type: 'location',
            chat: imageMessages[text],
            link: config.link,
            sender: 'bot',
          });
        }
      }
    }
    return botChats;
  };

  const onUserSelection = (id) => {
    const chatResponse = currentButtonFlow.find((item) => item.id === id);
    const buttons = currentButtonFlow.filter(
      (buttonFlow) => buttonFlow.id !== id
    );
    setUserSelection(id);
    setCurrentButtonFlow(buttons);
    setShowBottomBar(false);
    const botMessages = constructBotChatData(id);
    setBotTyping(true);
    const updatedChatData = [
      {
        type: 'text',
        chat: chatResponse.label,
        sender: 'user',
      },
      ...botMessages,
    ];
    setChatData(updatedChatData);
  };

  const scrollToBottom = () => {
    const elem = document.getElementById('scroll-to-bottom');
    elem.scrollTo(0, elem.scrollHeight);
    const newNode = chatRef;
    chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
    newNode.current.scrollTop = newNode.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [showBottomBar]);

  useEffect(() => {
    addInitialChatData();
  }, []);

  return (
    <Bot>
      <BotContainer>
        <BotSection>
          <BotMessages
            chatRef={chatRef}
            chatData={chatData}
            isBotTyping={isBotTyping}
            resetBotTyping={resetBotTyping}
            audioRef={audioRef}
            scrollToBottom={scrollToBottom}
          />
          <BotFooter
            buttonConfig={currentButtonFlow}
            isBotTyping={isBotTyping}
            showBottomBar={showBottomBar}
            onUserSelection={onUserSelection}
            userSelection={userSelection}
          />
        </BotSection>
      </BotContainer>
      <div style={{ display: 'none' }}>
        <img src={images.InvitationCard} alt="cache0" />
        <img src={images.Balaji} alt="cache1" />
        <img src={images.Raji} alt="cache2" />
        <img src={images.Together} alt="cache3" />
        <img src={images.LocationImage} alt="cache3" />
        <img src={images.TomAndJerry} alt="cache4" />
      </div>
    </Bot>
  );
};

export default App;
