import React from 'react';
import { Tags } from '../tags';
import {
  ContainerImg,
  ContainerTags,
  ContainerText,
  Root,
  TextId,
  TextTitle,
} from './styles';

interface CardPokemonProps {
  isOpenModal: () => void;
}

export const CardPokemon: React.FC<CardPokemonProps> = ({ isOpenModal }) => {
  return (
    <Root onClick={isOpenModal}>
      <ContainerText>
        <ContainerImg>
          <img
            src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg"
            alt="Bulbasalro"
          />
        </ContainerImg>
        <TextId>Nº387</TextId>
        <TextTitle>Turtwig</TextTitle>
        <ContainerTags>
          <Tags type="fighting" />
          <Tags type="fighting" />
        </ContainerTags>
      </ContainerText>
    </Root>
  );
};
