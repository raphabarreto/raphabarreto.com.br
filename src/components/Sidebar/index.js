import React from 'react';
import Profile from '~components/Profile';
import SocialLinks from '~components/SocialLinks';
import MenuLinks from '~components/MenuLinks';

import * as S from './styled';

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWrapper>
);

export default Sidebar;
