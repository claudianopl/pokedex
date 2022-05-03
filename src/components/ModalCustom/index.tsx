import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Tags } from '../tags';
import {
  ButtonClose,
  Container,
  ContainerTags,
  Root,
  Text,
  TextTitle,
} from './styles';

interface ModalCustomProps {
  setIsOpenModal: (args: boolean) => void;
}

export const ModalCustom: React.FC<ModalCustomProps> = ({ setIsOpenModal }) => {
  return (
    <Root>
      <Container>
        <ButtonClose onClick={() => setIsOpenModal(false)}>
          <AiOutlineClose size={32} />
        </ButtonClose>
        <img
          src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg"
          alt="Bulbasalro"
        />
        <Text type="id">#387</Text>
        <TextTitle>Turtwig</TextTitle>
        <Text>Emperor Pokémon</Text>
        <ContainerTags>
          <Tags type="fighting" />
          <Tags type="fighting" />
        </ContainerTags>
        <Text type="textSubtitle">Pokédex Entry</Text>
        <Text type="text">
          It swims as fast as a jet boat. The edges of its wings are sharp and
          can slice apart drifting ice.It swims as fast as a jet boat. The edges
          of its wings are sharp and can slice apart drifting ice.It swims as
          fast as a jet boat. The edges of its wings are sharp and can slice
          apart drifting ice.It swims as fast as a jet boat. The edges of its
          wings are sharp and can slice apart drifting ice.It swims as fast as a
          jet boat. The edges of its wings are sharp and can slice apart
          drifting ice.It swims as fast as a jet boat. The edges of its wings
          are sharp and can slice apart drifting ice.
        </Text>
      </Container>
    </Root>
  );
};
