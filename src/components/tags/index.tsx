import React from 'react';
import { Container } from './styles';

interface TagsProps {
  type: string;
}

export const Tags: React.FC<TagsProps> = ({ type }) => {
  return (
    <Container type={type}>
      <h3>{type.toUpperCase()}</h3>
    </Container>
  );
};
