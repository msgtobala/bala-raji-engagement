import React from 'react';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  Footer,
  BotInputContainer,
  BotInput,
  BotSendIcon,
} from './BotFooter.styled';
import BotButtonContainer from '../BotButtonContainer/BotButtonContainer';
import TimerCounter from './TimerCounter';

export const BotFooter = (props) => {
  const {
    buttonConfig,
    onUserSelection,
    isBotTyping,
    showBottomBar,
    userSelection,
  } = props;

  if (buttonConfig.length === 0 && showBottomBar) {
    return <TimerCounter targetDate="Aug 14, 2022 00:00:00" />;
  }

  return (
    <Footer showBottomBar={showBottomBar}>
      <BotInputContainer>
        <BotInput
          type="text"
          placeholder={
            isBotTyping ? 'Please wait...' : '👇🏻👇🏻 Choose from below... 👇🏻👇🏻'
          }
          className="input"
          disabled
        />
        <BotSendIcon icon={faPaperPlane} />
      </BotInputContainer>
      <BotButtonContainer
        buttonConfig={buttonConfig}
        showBottomBar={showBottomBar}
        onUserSelection={onUserSelection}
        userSelection={userSelection}
      />
    </Footer>
  );
};

export default BotFooter;
