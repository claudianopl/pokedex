import styled from 'styled-components';

export const Root = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 62px 84px 16px 84px;
  padding: 62px 0px 16px 0px;
  width: 100%;
  max-width: 237px;
  cursor: pointer;
`;

export const ContainerImg = styled.div`
  position: absolute;
  margin-bottom: 215px;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const ContainerText = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextId = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 10px;
`;

export const TextTitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.title};
`;

export const ContainerTags = styled.div`
  display: flex;
  justify-content: center;
  max-width: 200px;
  width: 100%;
`;
