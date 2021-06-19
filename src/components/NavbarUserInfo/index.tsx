import React, { VFC } from 'react';
import * as S from './styles';

import { NavbarUserInfoProps } from '../../types';

import { profilePhotoPlaceholder } from '../../constants'


const NavbarUserInfo: VFC<NavbarUserInfoProps> = ({username, photoURL}) => {
  return(
    <S.Div>
      <S.TextName>{username}</S.TextName>
      <S.UserPhoto src={photoURL == null ? profilePhotoPlaceholder : photoURL} />
    </S.Div>
  )
}

export default NavbarUserInfo;