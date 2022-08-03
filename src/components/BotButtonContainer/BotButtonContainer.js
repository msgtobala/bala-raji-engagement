import React from 'react';

import {
  StyledBotButtonContainer,
  BotButton,
} from './BotButtonContainer.styled';

const BotButtonContainer = (props) => {
  const { buttonConfig, showBottomBar, onUserSelection, userSelection } = props;
  console.log(userSelection);

  return (
    <StyledBotButtonContainer
      showBottomBar={showBottomBar}
      userSelection={userSelection}
    >
      {buttonConfig.slice(0, 2).map((config) => (
        <BotButton
          type="button"
          key={config.id}
          onClick={() => onUserSelection(config.id)}
        >
          {config.label}
        </BotButton>
      ))}
    </StyledBotButtonContainer>
  );
};

export default BotButtonContainer;
