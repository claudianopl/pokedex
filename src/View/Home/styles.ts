import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  @media only screen and (max-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media only screen and (max-width: 1365px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ContainerPokemonCard = styled.div`
  min-height: 398px;
  margin-bottom: 32px;
`;

export const Grid = styled.div`
  margin-top: 74px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 64px 16px;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
