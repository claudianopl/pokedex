import React from 'react';
import { Root } from './styled';

const Header: React.FC = () => {
  return (
    <Root>
      <img src="images/logo.png" alt="Logo" width={398} height={73} />
    </Root>
  );
};

export default Header;
