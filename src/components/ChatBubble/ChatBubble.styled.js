import styled from 'styled-components';

export const Message = styled.div`
  padding: 7px 12px 12px 12px;
  max-width: 60%;
  width: fit-content;
  white-space: pre-line;
  position: relative;
  font-size: 11.2pt;
  word-wrap: break-word;
  box-shadow: 0 0.4px 0.2px rgba(0, 0, 0, 0.13);

  @media only screen and (min-width: 768px) {
    max-width: 80%;
  }
`;

export const BotChatBubble = styled(Message)`
  color: #333;
  background-color: #f1f1f1;
  border-top-right-radius: 1.3em;
  border-bottom-left-radius: 1.3em;
  border-bottom-right-radius: 1.3em;
  animation: fadeIn 2s;
`;

export const UserChatBubble = styled(Message)`
  color: white;
  background-color: #0084ff;
  border-top-left-radius: 1.3em;
  border-bottom-left-radius: 1.3em;
  border-bottom-right-radius: 1.3em;
`;
