import { saturate } from 'polished';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  display: flex;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    margin-right: 0px;
    margin-bottom: 28px;
  }
`;

export const Container = styled.div`
  max-width: 753px;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.1);
  font-weight: 400;
  border-radius: 12px;
  backdrop-filter: blur(2px);
  padding: 8px 16px;
  width: 100%;
  color: ${(props) => props.theme.colors.textInput};
  display: flex;
  flex-direction: row;
  input {
    margin-top: 3px;
    flex: 1;
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.textInput};
    letter-spacing: 0.95px;
    font-size: 19px;
    &::placeholder {
      color: ${(props) => props.theme.colors.textInput};
    }
    &:focus {
      color: ${(props) => props.theme.colors.text};
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }
`;

export const ButtonSubmit = styled.button`
  border: 0;
  color: white;
  padding: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff5350;
  box-shadow: 0px 6px 24px rgba(255, 83, 80, 0.5);
  transition: background-color 0.4s;

  border-radius: 13px;
  &:focus {
    border: 0 none;
    outline: 0;
  }
  &:disabled {
    background: rgba(62, 62, 62, 0.21);
  }
  &:not([disabled]):hover {
    background: ${saturate(0.1, '#ff5350')};
    text-transform: none;
  }
`;
