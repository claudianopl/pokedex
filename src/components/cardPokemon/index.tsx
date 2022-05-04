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
  imgUrl: string;
  id: string;
  name: string;
  types: [];
}

export const CardPokemon: React.FC<CardPokemonProps> = ({
  isOpenModal,
  imgUrl,
  id,
  name,
  types,
}) => {
  return (
    <Root onClick={isOpenModal}>
      <ContainerText>
        <ContainerImg>
          <img src={imgUrl} alt={name} />
        </ContainerImg>
        <TextId>Nº{id}</TextId>
        <TextTitle>{name}</TextTitle>
        <ContainerTags>
          {types.map(({ typeName }) => (
            <Tags key={typeName} type={typeName} />
          ))}
        </ContainerTags>
      </ContainerText>
    </Root>
  );
};
