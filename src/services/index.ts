import axios from 'axios';
import { useQuery } from 'react-query';

const API_URL = `https://taggram.herokuapp.com`;

export const GetUserInfo = () => useQuery("GET_USER_INFO", () => axios.get(`${API_URL}/me`).then((data) => data.data));

export const GetPostInfo = () => useQuery("GET_POST_INFO", () => axios.get(`${API_URL}/post`).then((data) => data.data));

export const CommentSubmit = (comment: string, uuid: string, username: string) => 
 axios.post(`${API_URL}/posts/${uuid}/comments`, {
  username: username,
  message: comment,
}).then((data) => {
  console.log({data});
  return data;
});