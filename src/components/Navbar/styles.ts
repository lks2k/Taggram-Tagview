import styled from 'styled-components';
import NavbarUserInfo from '../NavbarUserInfo';


export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 54px;
`;

export const Border = styled.hr`
  border-top: 1px solid ${({theme}): string => theme.colors.lightGrey};
`

export const Image = styled.img`
  user-select: none;
`;

export const userInfo = styled(NavbarUserInfo)`
  align-self: flex-end;
`;