import styled from 'styled-components';

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 6.5fr 3.5fr;
  grid-column-gap: 0px;
  margin: 0 auto;
  margin-top: 75px; 
  width: 100%;
  height: 100%;
  max-width: 900px;
  max-height: 600px;
  border-radius: 5px;
  border: 1.5px solid #EFEFEF;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;