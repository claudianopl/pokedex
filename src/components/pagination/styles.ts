import styled, { css } from 'styled-components';
import { saturate } from 'polished';

interface ButtonProps {
  isPagination?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: 0;
  border-radius: 44px;
  padding: 8px;
  display: flex;
  color: ${(props) => props.theme.colors.title};
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s;
  border: 1px solid rgba(51, 51, 51, 0.2);
  background: transparent;
  box-sizing: border-box;
  ${(props) =>
    props.isPagination &&
    css`
      margin-right: 8px;
    `}
  &:focus {
    outline: 0;
  }
  &:disabled {
    color: rgba(51, 51, 51, 0.4);
  }
  &:not([disabled]):hover {
    background: ${saturate(0.1, '#fff')};
    text-transform: none;
  }
`;

export const ContainerPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 88px;
  article {
    color: ${(props) => props.theme.colors.text};
    margin-right: 16px;
  }
`;
