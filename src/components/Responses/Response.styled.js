import styled from 'styled-components';

export const StyledUserResponse = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0px;
`;

export const StyledBotResponse = styled.div`
  margin-bottom: 7px;
`;

export const MessageBotImage = styled.div`
  width: 60%;

  & > img {
    width: 100%;
    border-radius: 1.3em;
    border-top-left-radius: 3px;
    height: 100%;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 230px;
  margin-bottom: 24px;

  & > video {
    border-top-right-radius: 1.3em;
    border-bottom-left-radius: 1.3em;
    border-bottom-right-radius: 1.3em;
    height: 87%;
    width: 86%;
  }
`;
