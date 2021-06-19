import styled from 'styled-components';

export const CommentContainer = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  
  max-height: 75px;
`;

export const AuthorProfilePic = styled.img`
  margin-left: 16px;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  justify-self: center;
  align-self: center;
`;

export const CommentMessageText = styled.h5`
  justify-self: center;
  align-self: center;
  margin: 0;
  padding-left: 16px;
  white-space: pre-line;
  font-weight: 400;
  width: 100%;
  max-width: 260px;
`;

export const CommentedAtText = styled.h6`
  margin: 0;
  justify-self: start;
`;