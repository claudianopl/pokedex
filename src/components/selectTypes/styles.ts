import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding-left: 23px;
  padding-right: 23px;
  color: #ccccd1;
  width: 100%;
  max-width: 238px;
  border-radius: 16px;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 480px) {
    max-width: none;
    height: 56px;
  }
`;
