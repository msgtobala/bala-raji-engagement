import styled from 'styled-components';

export const StyledBotButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: ${(props) =>
    !props.showBottomBar
      ? props.userSelection === 'personal_pics'
        ? '-46px'
        : '-84px'
      : '10px'};
  transition: margin-bottom 0.5s ease-in-out;

  @media only screen and (min-width: 768px) {
    margin-bottom: ${(props) =>
      !props.showBottomBar
        ? props.userSelection === 'personal_pics'
          ? '-125px'
          : '-85px'
        : '10px'};
  }
`;

export const BotButton = styled.button`
  color: #fff;
  background-color: #0084ff;
  outline: none;
  cursor: pointer;
  border-top-right-radius: 1.3em;
  border-bottom-left-radius: 1.3em;
  border-top-left-radius: 1.3em;
  border-bottom-right-radius: 1.3em;
  padding: 8px 12px;
  box-shadow: 1px 1px 4px grey;
  border-width: 0;
  width: 100%;
  margin-bottom: 5px;
  cursor: pointer;
  text-transform: inherit;
  font-size: 16px;
  letter-spacing: 0.6px;
`;
