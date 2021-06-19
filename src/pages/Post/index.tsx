import React, { useMemo, VFC } from 'react';
import Navbar from '../../components/Navbar';
import PostData from '../../components/PostData';
import PostCommentItem from '../../components/PostCommentItem';
import Container from '../../components/Container';

import { userDataTypes, postDataTypes, CommentItem } from '../../types'

import { GetUserInfo, GetPostInfo } from '../../services';


const Post: VFC = () => {



  const { data: userInfo, isLoading: isUserInfoLoading } = GetUserInfo();
  const { data: postInfo, isLoading: isPostInfoLoading } = GetPostInfo();



  if(isUserInfoLoading || isPostInfoLoading) return null;


  const userData: userDataTypes  = {
    username: userInfo.username,
    photoURL: userInfo.avatar
  }

  const postData: postDataTypes = {
    postPhotoURL: postInfo.photo,
    userPhotoURL: postInfo.user.avatar,
    username: postInfo.user.username,
    location: {
      city: postInfo.location.city,
      country: postInfo.location.country
    },
    comments: postInfo.comments,
  }

  console.log(postInfo);

  return(
    <>
      <Navbar {...userData}/>
      <PostData {...postData}/>
    </>
  )
}

export default Post;