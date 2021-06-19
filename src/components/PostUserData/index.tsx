import React, { VFC } from 'react';
import * as S from './styles';

import { PostUserDataProps } from '../../types'

import { profilePhotoPlaceholder } from '../../constants'

const PostUserData: VFC<PostUserDataProps> = ({ userPhotoURL, username, location}) => {
  return(
    <S.PostUserDataContainer>
           <S.UserPostProfileImage src={userPhotoURL == null ? profilePhotoPlaceholder : userPhotoURL}/>
           <S.UserInfoContainer>
             <S.PostUsernameText>{username}</S.PostUsernameText>
            <S.PostLocationText>{location?.city}, {location?.country}</S.PostLocationText>
           </S.UserInfoContainer>
    </S.PostUserDataContainer>
  )
}

export default PostUserData;