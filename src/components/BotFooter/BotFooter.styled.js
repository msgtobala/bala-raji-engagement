import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  /* height: ${(props) => (props.showBottomBar ? '17%' : '0%')};
  transition: height 0.5s ease-in-out; */
`;

export const BotInputContainer = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  position: relative;
  margin-bottom: 10px;
`;

export const BotInput = styled.input`
  width: 100%;
  background-color: #f1f1f1;
  border: 0;
  padding: 8px;
  color: #000;
  border-radius: 50px;
  box-shadow: 1px 1px 4px gray;
  padding-left: 20px;
  font-size: 16px;
  height: 35px;
  padding-right: 48px;
`;

export const BotSendIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 12px;
  top: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  color: darkslategrey;
  font-size: 20px !important;
`;
