import styled from 'styled-components';

export const SendCommentContainer = styled.div`
  display: flex;
  grid-column: 2;
  grid-row: 1;
  margin-top: 448px;
  border-top: 1.5px solid #EFEFEF;
  flex-direction: column;
`;

export const CommentsIndicator = styled.h5`
  margin: 0;
  padding-left: 18px;
  padding-top: 10px;
`

export const CommentSubmit = styled.a`
  align-self: flex-end;
  margin-top: -30px;
  margin-right: 10px;
  color: ${({ theme }): string => theme.colors.primary};
  cursor: pointer;
`;

export const CommentInputSection = styled.input.attrs(props => ({
  type: 'text',
}))`
  margin-top: 42px;
  margin-left: 5px;
  width: 75%;
  height: 45px;
  border: 0px transparent;

  :focus{
    outline: none;
  }
`;