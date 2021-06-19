import React, { useCallback, VFC } from 'react';

import * as S from './styles';

import { CommentSubmit } from '../../services'

const PostSendCommentSection: VFC = () => {

  let comment: string = "";

  const handleCommentSubmit = useCallback(async() => {
    let response = await CommentSubmit(comment, "fe466d67-ede6-4eab-9e92-bd826dbb89b6", "Stevie.Abernathy")
    .then(() => window.alert('O seu comentário foi enviado! :)'))
    .catch(() => window.alert('O seu comentário NÃO foi enviado! :('))
  },[]);


  return(
    <S.SendCommentContainer>
      <S.CommentsIndicator>
        25 comentários
      </S.CommentsIndicator>
      <S.CommentInputSection onChange={(event) => {comment = event.target.value}}>
      </S.CommentInputSection>
      <S.CommentSubmit onClick={handleCommentSubmit}>Enviar</S.CommentSubmit>
    </S.SendCommentContainer>
  )
}

export default PostSendCommentSection;