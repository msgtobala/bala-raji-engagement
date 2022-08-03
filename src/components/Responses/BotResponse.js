import React from 'react';

import {
  StyledBotResponse,
  MessageBotImage,
  VideoContainer,
} from './Response.styled';
import { BotChatBubble } from '../ChatBubble/ChatBubble.styled';

const BotResponse = (props) => {
  const { response, audioRef, videoRef } = props;
  return (
    <StyledBotResponse>
      {response.type === 'text' && (
        <BotChatBubble>
          <span dangerouslySetInnerHTML={{ __html: response.chat }}></span>
        </BotChatBubble>
      )}
      {response.type === 'image' && (
        <MessageBotImage>
          <img data-action="zoom" src={response.chat} alt="" />
        </MessageBotImage>
      )}
      <BotChatBubble style={{ display: 'none' }}>
        <audio ref={audioRef} id="audio">
          <source type="audio/mpeg" />
        </audio>
      </BotChatBubble>
      {response.type === 'video' && (
        <VideoContainer>
          <video ref={videoRef} width="200" height="240" controls>
            <source src={response.chat} type="video/mp4" />
          </video>
        </VideoContainer>
      )}
      {response.type === 'location' && (
        <BotChatBubble>
          <a href={response.link} target="_blank" rel="noreferrer">
            <img
              src={response.chat}
              style={{ width: '100%' }}
              alt="map-location"
            />
          </a>
        </BotChatBubble>
      )}
    </StyledBotResponse>
  );
};

export default BotResponse;
