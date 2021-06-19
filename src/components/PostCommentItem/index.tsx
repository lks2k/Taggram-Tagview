import React, { VFC } from 'react';

import * as S from './styles';
import { profilePhotoPlaceholder } from '../../constants'
import { PostCommentItemTypes } from '../../types';

const PostCommentItem: VFC<PostCommentItemTypes> = ({ user, message, createdAt }) => {
  return (
    <S.CommentContainer>
      <S.AuthorProfilePic src={profilePhotoPlaceholder}/>
      <S.CommentMessageText><strong>{user.username}</strong> {message}</S.CommentMessageText>
    </S.CommentContainer>
  )
}

export default PostCommentItem;