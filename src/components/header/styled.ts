import styled from 'styled-components';

export const Root = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 36px;
  img {
    margin-bottom: 32px;
    width: 398px;
    height: 73px;
  }
  @media only screen and (max-width: 480px) {
    img {
      width: 250px;
      height: 54px;
    }
  }
`;
