import { saturate } from 'polished';
import styled, { css } from 'styled-components';

interface TextProps {
  type?: string;
}

export const Root = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    align-items: end;
  }
`;

export const Container = styled.div`
  max-width: 401px;
  max-height: 506px;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 12px;
  padding: 37px 50px 45px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  img {
    width: 209px;
    height: 209px;
    margin-bottom: 7px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  margin-left: 320px;
  margin-top: -30px;
  border: 0;
  border-radius: 44px;
  padding: 8px;
  display: flex;
  color: ${(props) => props.theme.colors.text};
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s;
  background: transparent;
  border: 0px;
  box-sizing: border-box;
  &:focus {
    outline: 0;
  }
  &:disabled {
    color: rgba(51, 51, 51, 0.4);
  }
  &:not([disabled]):hover {
    color: ${saturate(0.6, '#8A939D')};
    text-transform: none;
  }
`;

export const TextTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${(props) => props.theme.colors.title};
  margin-bottom: 5px;
`;

export const Text = styled.p<TextProps>`
  ${(props) => {
    if (props.type === 'id') {
      return css`
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: ${props.theme.colors.text};
        margin-bottom: 4px;
      `;
    }
    if (props.type === 'textSubtitle') {
      return css`
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props.theme.colors.title};
        margin-bottom: 11px;
      `;
    }
    if (props.type === 'text') {
      return css`
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: ${props.theme.colors.title};
        text-align: center;
      `;
    }
    return css`
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: ${props.theme.colors.text};
      margin-bottom: 4px;
    `;
  }}
`;

export const ContainerTags = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 14px;
`;
