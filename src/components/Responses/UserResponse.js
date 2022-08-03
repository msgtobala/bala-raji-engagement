import React from 'react';

import { StyledUserResponse } from './Response.styled';
import { UserChatBubble } from '../ChatBubble/ChatBubble.styled';

const UserResponse = (props) => {
  const { response } = props;
  return (
    <StyledUserResponse>
      <UserChatBubble>{response.chat}</UserChatBubble>
    </StyledUserResponse>
  );
};

export default UserResponse;
