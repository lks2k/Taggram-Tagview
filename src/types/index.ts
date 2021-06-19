export type postDataTypes = {
  postPhotoURL: string;
  userPhotoURL: string;
  username: string;
  location: {
    city: string;
    country: string;
  }
  comments: CommentItem[];
}

export type userDataTypes = {
  photoURL: string;
  username: string;
}

export type PostUserDataProps = {
  userPhotoURL: string;
  username: string;
  location: {
    city: string;
    country: string;
  };
};

export type PostDataProps ={
  postPhotoURL: string;
  userPhotoURL: string;
  username: string;
  location: {
      city: string;
      country: string;
    },
  comments?: CommentItem[];
}

export type PostCommentSectionTypes = {
  comments?: CommentItem[];
}

export type CommentItem = {
  user: {
    username: string;
    avatar: string;
  },
  message: string;
  createdAt: string;
}

export type PostCommentItemTypes = {
  user: {
    username: string;
    avatar: string;
  },
  message: string;
  createdAt: string;
};

export type CommentDataTypes = {
  comment: CommentItem[];

}


export type NavbarUserInfoProps = {
  username: string;
  photoURL?: string;
}

export type NavbarProps = {
  username: string;
  photoURL: string;
}