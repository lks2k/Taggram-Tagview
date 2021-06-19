import styled from 'styled-components';

export const PostUsernameText = styled.h4`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 14px;
  margin: 0;
`;

export const PostLocationText = styled.h4`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 12px;
  margin: 0;
`;

export const UserPostProfileImage = styled.img`
  margin-left: 16px;
  justify-self: center;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  align-self: center;
`;


export const PostUserDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  width: 334px;
  height: 73px;
  border-top-right-radius: 5px;
  border-bottom: 1.5px solid #EFEFEF;
  grid-row: 1;
  grid-column: 2;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  justify-content: center;
  justify-items: center;
  align-self: center;
  flex-direction: column;
`;