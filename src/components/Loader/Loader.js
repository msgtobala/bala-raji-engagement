import React from 'react';
import Images from '../../resources/images';

import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <img src={Images.LoaderImg} alt="loading..." />
    </StyledLoader>
  );
};
