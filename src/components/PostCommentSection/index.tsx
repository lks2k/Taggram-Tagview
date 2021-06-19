import React, { useMemo, VFC } from 'react';

import * as S from './styles';

import { PostCommentSectionTypes, CommentItem } from '../../types';

import PostCommentItem from '../../components/PostCommentItem';

const PostCommentSection: VFC<PostCommentSectionTypes> = ({ comments }) => {

  const RenderComments = useMemo(() => {
    if (!comments) return null;
    const Comments = comments.map((comment: CommentItem, i) => {
      return(
        <PostCommentItem key={i} {...comment} />
      ) 
    });
    return Comments;
  }, [comments]);

  return(
    <S.PostCommentSectionContainer>
      {RenderComments}
    </S.PostCommentSectionContainer>
  )
}

export default PostCommentSection;