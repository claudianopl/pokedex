import styled, { css } from 'styled-components';

interface ContainerProps {
  type: string;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 9px;
  padding: 9px 10px;
  border-radius: 7px;
  &:first-child {
    margin-right: 8px;
  }
  h3 {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${(props) => props.theme.colors.title};
  }
  ${(props) => {
    if (props.type === 'grass') {
      return css`
        background-color: ${props.theme.colors.backgroundTypeGrass};
      `;
    }
    if (props.type === 'ground') {
      return css`
        background-color: ${props.theme.colors.backgroundTypeGround};
      `;
    }
    if (props.type === 'fire') {
      return css`
        background-color: ${props.theme.colors.backgroundTypeFire};
      `;
    }
    if (props.type === 'fighting') {
      return css`
        background-color: ${props.theme.colors.backgroundTypeFighting};
      `;
    }
    return css`
      background-color: ${props.theme.colors.backgroundTypeDefault};
    `;
  }}
`;
