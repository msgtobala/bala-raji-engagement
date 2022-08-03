import styled from 'styled-components';

export const StyledBotMessages = styled.div.attrs({
  id: 'scroll-to-bottom',
})`
  margin: 0;
  overflow-y: scroll;
  height: ${(props) => (props.isBotTyping ? '90%' : '80%')};
  padding: 10px 8px 0 8px;

  @media only screen and (min-width: 768px) {
    height: ${(props) => (props.isBotTyping ? '90%' : '75%')};
  }
`;
