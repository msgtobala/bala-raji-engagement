import styled from 'styled-components';

import Images from "./resources/images";

export const Bot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BotContainer = styled.div`
  width: 25%;
  height: 70%;
  transition: 0.3s ease-out;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.6);

  @media only screen and (max-width: 1025px) {
    width: 70%;
    height: 80%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const BotSection = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: ' ';
    background-image: url('${Images.CoverPic}');
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    opacity: 0.6;
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
    height: 100%;
    background-size: cover;
    z-index: -1;
    width: 100%;
  }
`;
