import styled from 'styled-components';

import { BotChatBubble } from '../ChatBubble/ChatBubble.styled';

export const StyledLoader = styled(BotChatBubble)`
  padding: 0px;
  max-width: 60%;
  width: fit-content;
  white-space: pre-line;
  position: relative;
  font-size: 11.2pt;
  word-wrap: break-word;
  margin-bottom: 7px;
  box-shadow: 0 0.4px 0.2px rgba(0, 0, 0, 0.13);

  & > img {
    width: 55px;
    height: 45px;
  }
`;
