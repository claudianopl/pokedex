import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';
import { MdCatchingPokemon } from 'react-icons/md';
import { ButtonSubmit, Container, Root } from './styles';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Search: React.FC<InputTextProps> = ({ name, ...rest }) => {
  const [field] = useField(name);

  return (
    <Root>
      <Container>
        <input type="text" {...rest} {...field} />
        <ButtonSubmit type="submit">
          <MdCatchingPokemon size={22} />
        </ButtonSubmit>
      </Container>
    </Root>
  );
};
