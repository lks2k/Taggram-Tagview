import styled from 'styled-components';

const Container = styled.div`
  max-width: 1292px;
  margin: auto;
  padding: 0 32;

  @media screen and (max-width: 767px){
    padding: 0 16;
  }
`;

export default Container;
