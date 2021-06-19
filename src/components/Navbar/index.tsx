import React, { VFC } from 'react';
import Container from '../../components/Container';
import * as S from './styles';
import Logo from '../../images/logo.svg'
import NavbarUserInfo from '../NavbarUserInfo';

import { NavbarProps } from '../../types'

const Navbar: VFC<NavbarProps> = ({username, photoURL}) => {

  const userData = {
    username: username,
    photoURL: photoURL,
  }

  return(
    <>
    <Container>
      <S.Div> 
          <S.Image src={Logo} width="82" alt="taggram_logo"/>
          <NavbarUserInfo {...userData} />
      </S.Div>
    </Container>
    <S.Border />
    </>
  );
}

export default Navbar;