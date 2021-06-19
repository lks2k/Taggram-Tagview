import React, { VFC } from 'react';
import PostUserData from '../../components/PostUserData';
import PostCommentSection from '../../components/PostCommentSection';
import PostSendCommentSection from '../../components/PostSendCommentSection';

import { PostDataProps } from '../../types';
import * as S from './styles';

const PostData: VFC<PostDataProps> = ({ postPhotoURL, userPhotoURL, username, location, comments }) => {
  return (
    <S.PostContainer>
      <S.PostImage src={postPhotoURL} />
      <PostUserData userPhotoURL={userPhotoURL} username={username} location={location}/>
      <PostCommentSection comments={comments} />
      <PostSendCommentSection />
    </S.PostContainer>
  )
}

export default PostData;